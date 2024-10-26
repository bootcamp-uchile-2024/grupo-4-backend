import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto, Tipos } from './entities/producto.entity';
import { ProductoDTO } from './dto/producto.dto';
import { Productos } from 'src/orm/entity/producto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductoMapper } from './mappers/producto.mappers';

@Injectable()
export class ProductosService {

  constructor(
    @InjectRepository(Productos)
    private productosRepository: Repository<Productos>,
  ) {}


  productos: Producto[] = [];

  create(createProductoDto: CreateProductoDto): ProductoDTO {
    const nuevoProducto = new ProductoDTO();

    nuevoProducto.id = this.productos.length + 1;
    nuevoProducto.nombre = createProductoDto.nombre;
    nuevoProducto.descripcion = createProductoDto.descripcion;
    nuevoProducto.precio = createProductoDto.precio;
    nuevoProducto.imagen = createProductoDto.imagen;
    nuevoProducto.stock = createProductoDto.stock;
    nuevoProducto.marca = createProductoDto.marca;
    nuevoProducto.origen = createProductoDto.origen;
    nuevoProducto.tipo = createProductoDto.tipo;
    nuevoProducto.formato = createProductoDto.formato;
    nuevoProducto.fecha = createProductoDto.fecha;
    nuevoProducto.categorias = createProductoDto.categorias;
    nuevoProducto.destacado = createProductoDto.destacado;

    this.productos.push(nuevoProducto);

    return nuevoProducto;
  }

  async findAll(): Promise<ProductoDTO[]> {
    const listadoProductos: Productos[]= await this.productosRepository.find();
    return ProductoMapper.entityListToDtoList(listadoProductos);
  }

  findOne(id: number): ProductoDTO {
    const producto = this.productos.find((producto) => producto.id == id);

    return producto ? producto : null;
  }

  update(id: number, updateProductoDto: UpdateProductoDto): boolean {
    const producto = this.findOne(id);

    console.log('producto: ', producto);

    if (!producto) return false;

    producto.nombre = updateProductoDto.nombre;
    producto.descripcion = updateProductoDto.descripcion;
    producto.precio = updateProductoDto.precio;
    producto.imagen = updateProductoDto.imagen;
    producto.stock = updateProductoDto.stock;
    producto.marca = updateProductoDto.marca;
    producto.origen = updateProductoDto.origen;
    producto.tipo = updateProductoDto.tipo;
    producto.formato = updateProductoDto.formato;
    producto.fecha = updateProductoDto.fecha;
    producto.categorias = updateProductoDto.categorias;
    producto.destacado = updateProductoDto.destacado;

    return true;
  }

  remove(id: number): boolean {
    const producto = this.findOne(id);

    if (!producto) return false;

    this.productos.forEach((producto) => {
      if (producto.id == id) {
        this.productos.splice(this.productos.indexOf(producto), 1);
      }
    });

    return true;
  }
}
