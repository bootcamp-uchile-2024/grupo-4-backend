import { Injectable } from '@nestjs/common';
import { CreateCarritoDeCompraDto } from './dto/create-carrito-de-compra.dto';
import { UpdateCarritoDeCompraDto } from './dto/update-carrito-de-compra.dto';
import { CarritoDeCompra } from './entities/carrito-de-compra.entity';
import { UsuarioService } from 'src/usuario/usuario.service';
import { UsuarioCarritoDeCompraDto } from './dto/usuario-carrito-de-compra.dto';
import { CarritoItem } from './entities/carrito-item.entity';
import { ProductosService } from 'src/productos/productos.service';
import { CarritoProductoDto } from 'src/productos/dto/carrito-producto.dto';

@Injectable()
export class CarritoDeComprasService {
  carritoDeCompras: CarritoDeCompra[] = [];

  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly productoService: ProductosService,
  ) {}

  create(createCarritoDeCompraDto: CreateCarritoDeCompraDto): CarritoDeCompra {
    const usuario = this.usuarioService.findOne(
      createCarritoDeCompraDto.usuario.id,
    );

    //Verifica que el usuario exista
    if (!usuario) return null;

    //Verifica que los productos existan
    const productosId = createCarritoDeCompraDto.items.map(
      (item) => item.producto.productoId,
    );

    console.log('productosId', productosId);

    productosId.forEach((productoId) => {
      if (!this.productoService.findOne(productoId)) return null;
    });

    //Se crea el carrito de compra

    const carrito = new CarritoDeCompra();

    carrito.id = this.carritoDeCompras.length + 1;
    carrito.usuario = new UsuarioCarritoDeCompraDto();
    carrito.usuario.id = usuario.id;
    carrito.estadoCarrito = 0;

    const items: CarritoItem[] = [];
    const item = new CarritoItem();

    createCarritoDeCompraDto.items.forEach((itemDto, index) => {
      const producto = this.productoService.findOne(
        itemDto.producto.productoId,
      );

      item.id = index + 1;
      item.producto = new CarritoProductoDto();
      item.producto.productoId = itemDto.producto.productoId;
      item.producto.precio = producto.precio;

      item.cantidad = itemDto.cantidad;
      item.carritoDeComprasId = carrito.id;
      items.push(item);
    });

    carrito.items = items;
    this.carritoDeCompras.push(carrito);

    //Actualiza el carrito de compra del usuario
    this.usuarioService.updateCarrito(usuario.id, carrito);

    return carrito;
  }

  findCarritoByUsuarioId(usuarioId: number): CarritoDeCompra[] {
    const usuario = this.usuarioService.findOne(usuarioId);

    if (!usuario) return null;

    const carrito = this.carritoDeCompras.filter(
      (carrito) => carrito.usuario.id == usuarioId,
    );

    return carrito;
  }

  findOne(id: number): CarritoDeCompra {
    const carrito = this.carritoDeCompras.find((carrito) => carrito.id == id);

    return carrito ? carrito : null;
  }

  update(
    id: number,
    updateCarritoDeCompraDto: UpdateCarritoDeCompraDto,
  ): boolean {
    const carrito = this.findOne(id);

    if (!carrito) return false;

    const usuario = this.usuarioService.findOne(
      updateCarritoDeCompraDto.usuario.id,
    );

    if (!usuario) return false;

    carrito.usuario.id = usuario.id;

    const items: CarritoItem[] = [];
    const item = new CarritoItem();

    updateCarritoDeCompraDto.items.forEach((itemDto, index) => {
      const producto = this.productoService.findOne(
        itemDto.producto.productoId,
      );

      item.id = index + 1;
      item.producto = new CarritoProductoDto();
      item.producto.productoId = itemDto.producto.productoId;
      item.producto.precio = producto.precio;

      item.cantidad = itemDto.cantidad;
      item.carritoDeComprasId = carrito.id;
      items.push(item);
    });

    carrito.items = items;

    return true;
  }

  remove(id: number): boolean {
    const carrito = this.findOne(id);

    if (!carrito) return false;

    this.carritoDeCompras.forEach((carrito) => {
      if (carrito.id == id) {
        this.carritoDeCompras.splice(this.carritoDeCompras.indexOf(carrito), 1);
      }
    });

    //Elimina el carrito de compra del usuario
    this.usuarioService.deleteCarrito(carrito.usuario.id);

    return true;
  }

  updateEstado(id: number, estado: number): boolean {
    const carrito = this.findOne(id);

    if (!carrito) return false;
    if (estado < 0 || estado > 2) return false;

    carrito.estadoCarrito = estado;

    return true;
  }
}
