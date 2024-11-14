import { Injectable } from '@nestjs/common';
import { CreateCarritoDeCompraDto } from './dto/create-carrito-de-compra.dto';
import { UpdateCarritoDeCompraDto } from './dto/update-carrito-de-compra.dto';
import { CarritoDeCompra } from './entities/carrito-de-compra.entity';
import { UsuarioService } from 'src/usuario/usuario.service';
import { UsuarioCarritoDeCompraDto } from './dto/usuario-carrito-de-compra.dto';
import { ProductosService } from 'src/productos/productos.service';
import { CarritoProductoDto } from 'src/productos/dto/carrito-producto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CarritoDeCompras } from 'src/orm/entity/carritoDeCompras';
import { In, Repository } from 'typeorm';
import { Usuarios } from 'src/orm/entity/usuario';
import { Productos } from 'src/orm/entity/producto';
import { ResponseDto } from './outputDto/responseDto';
import { CarritoItem } from 'src/orm/entity/carritoItem';
import { CarritoDeComprasDto } from './dto/carrito-de-compras.dto';
import { CarritoItemDto } from './dto/carrito-item.dto';

@Injectable()
export class CarritoDeComprasService {
  carritoDeCompras: CarritoDeCompra[] = [];

  constructor(

    @InjectRepository(CarritoDeCompras)
    private CarritoDeComprasRepository: Repository<CarritoDeCompras>,

    @InjectRepository(Usuarios)
    private UsuariosRepository: Repository<Usuarios>,

    @InjectRepository(Productos)
    private ProductosRepository: Repository<Productos>,

    @InjectRepository(CarritoItem)
    private CarritoItemRepository: Repository<CarritoItem>,

    private usuarioService: UsuarioService,
    private productoService: ProductosService,

  ) {}

  async create(createCarritoDeCompraDto: CreateCarritoDeCompraDto): Promise<ResponseDto<CarritoDeComprasDto>> {

    // Verificar que el usuario exista
    const usuario = await this.UsuariosRepository.findOne({
      where: { id: createCarritoDeCompraDto.usuarioId },
    });

    console.log('usuario', usuario);

    if (!usuario) return { 
      status: 404,
      message: 'El usuario no existe'
    };

    // Verificar que los productos existan
    const productosId = createCarritoDeCompraDto.items.map(
      (item) => item.productoId,
    );

    const productos = await this.ProductosRepository.findBy({
      id: In(productosId),
    });

    console.log('productos', productos);

    if (productos.length !== productosId.length) return { 
      status: 404,
      message: 'Uno o más productos no fueron encontrados'
    };

    // Crear el carrito de compras
    const carrito = new CarritoDeCompras();
    carrito.usuario = usuario;

    // Guardar el carrito para obtener el ID
    const carritoCreado = await this.CarritoDeComprasRepository.save(carrito);

    // Crear los items del carrito
    const items: CarritoItem[] = [];

    for (const itemDto of createCarritoDeCompraDto.items) {
      const producto = productos.find(p => p.id === itemDto.productoId);

      const carritoItem = new CarritoItem();
      carritoItem.producto = producto;
      carritoItem.cantidad = itemDto.cantidad;
      carritoItem.carritoDeCompras = carritoCreado;

      // Guardar el item
      await this.CarritoItemRepository.save(carritoItem);
      items.push(carritoItem);
    }

    // Asignar los items al carrito
    carritoCreado.items = items;

    // Mapear a DTO
    const carritoDto = new CarritoDeComprasDto();
    carritoDto.id = carritoCreado.id;
    carritoDto.usuarioId = carritoCreado.usuario.id;
    carritoDto.items = carritoCreado.items.map(item => {
      const itemDto = new CarritoItemDto();
      itemDto.id = item.id;
      itemDto.cantidad = item.cantidad;
      itemDto.productoId = item.producto.id;
      return itemDto;
    });

    return {
      status: 201,
      data: carritoDto,
    };
  
  }

  async findCarritoByUsuarioId(usuarioId: number): Promise<ResponseDto<CarritoDeComprasDto[]>> {
    // Verificar que el usuario exista
    const usuario = await this.UsuariosRepository.findOne({
      where: { id: usuarioId },
    });
  
    if (!usuario) return { 
      status: 404,
      message: 'El usuario no existe'
    };
  
    // Obtener los carritos del usuario
    const carritos = await this.CarritoDeComprasRepository.find({
      where: { usuario: { id: usuarioId } },
      relations: ['items', 'items.producto'],
    });
  
    // Mapear los carritos a DTOs
    const carritoDtos = carritos.map(carrito => {
      const carritoDto = new CarritoDeComprasDto();
      carritoDto.id = carrito.id;
      carritoDto.usuarioId = carrito.usuario.id;
      carritoDto.items = carrito.items.map(item => {
        const itemDto = new CarritoItemDto();
        itemDto.id = item.id;
        itemDto.cantidad = item.cantidad;
        itemDto.productoId = item.producto.id;
        return itemDto;
      });
      return carritoDto;
    });
  
    return {
      status: 200,
      data: carritoDtos,
    };
  }

  async findOne(id: number): Promise<ResponseDto<CarritoDeComprasDto>> {
    const carrito = await this.CarritoDeComprasRepository.findOne({
      where: { id },
      relations: ['usuario', 'items', 'items.producto'],
    });
  
    if (!carrito) return { 
      status: 404,
      message: 'Carrito no encontrado'
    };
  
    // Mapear a DTO
    const carritoDto = new CarritoDeComprasDto();
    carritoDto.id = carrito.id;
    carritoDto.usuarioId = carrito.usuario.id;
    carritoDto.items = carrito.items.map(item => {
      const itemDto = new CarritoItemDto();
      itemDto.id = item.id;
      itemDto.cantidad = item.cantidad;
      itemDto.productoId = item.producto.id;
      return itemDto;
    });
  
    return {
      status: 200,
      data: carritoDto,
    };
  }

  async update(
    id: number,
    updateCarritoDeCompraDto: UpdateCarritoDeCompraDto,
  ): Promise<ResponseDto<CarritoDeComprasDto>> {
    // Verificar si el carrito existe
    const carrito = await this.CarritoDeComprasRepository.findOne({
      where: { id },
      relations: ['items'],
    });
  
    if (!carrito) return { 
      status: 404,
      message: 'Carrito no encontrado'
    };
  
    // Verificar que el usuario exista (si se envía)
    if (updateCarritoDeCompraDto.usuarioId) {
      const usuario = await this.UsuariosRepository.findOne({
        where: { id: updateCarritoDeCompraDto.usuarioId },
      });
      
      if (!usuario) return { 
        status: 404,
        message: 'El usuario no existe'
      };

      carrito.usuario = usuario;
    }
  
    // Actualizar los items (si se envían)
    if (updateCarritoDeCompraDto.items) {
      // Eliminar los items actuales
      await this.CarritoItemRepository.delete({ carritoDeCompras: { id } });
  
      // Verificar que los productos existan
      const productosId = updateCarritoDeCompraDto.items.map(item => item.productoId);
      const productos = await this.ProductosRepository.findBy({ id: In(productosId) });
  
      if (productos.length !== productosId.length) return {
        status: 404,
        message: 'Uno o más productos no fueron encontrados'
      }
  
      // Crear y guardar los nuevos items
      const items: CarritoItem[] = [];
      for (const itemDto of updateCarritoDeCompraDto.items) {
        const producto = productos.find(p => p.id === itemDto.productoId);
  
        const carritoItem = new CarritoItem();
        carritoItem.producto = producto;
        carritoItem.cantidad = itemDto.cantidad;
        carritoItem.carritoDeCompras = carrito;
  
        await this.CarritoItemRepository.save(carritoItem);
        items.push(carritoItem);
      }
  
      carrito.items = items;
    }
  
    // Guardar los cambios en el carrito
    const carritoActualizado = await this.CarritoDeComprasRepository.save(carrito);
  
    // Mapear a DTO
    const carritoDto = new CarritoDeComprasDto();
    carritoDto.id = carritoActualizado.id;
    carritoDto.usuarioId = carritoActualizado.usuario.id;
    carritoDto.items = carritoActualizado.items.map(item => {
      const itemDto = new CarritoItemDto();
      itemDto.id = item.id;
      itemDto.cantidad = item.cantidad;
      itemDto.productoId = item.producto.id;
      return itemDto;
    });
  
    return {
      status: 200,
      data: carritoDto,
    };
  }

  async remove(id: number): Promise<ResponseDto<null>> {
    const carrito = await this.CarritoDeComprasRepository.findOne({
      where: { id },
    });
  
    if (!carrito) return {
      status: 404,
      message: 'Carrito no encontrado'
    }
  
    // Eliminar los items asociados
    await this.CarritoItemRepository.delete({ carritoDeCompras: { id } });
  
    // Eliminar el carrito
    await this.CarritoDeComprasRepository.delete(id);
  
    return {
      status: 200,
      message: 'Carrito eliminado correctamente',
    };
  }
}
