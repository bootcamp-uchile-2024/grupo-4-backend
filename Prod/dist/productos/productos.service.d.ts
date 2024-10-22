import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto, Tipos } from './entities/producto.entity';
export declare class ProductosService {
  productos: Producto[];
  create(createProductoDto: CreateProductoDto): Producto;
  findAll(tipo: Tipos): Producto[];
  findOne(id: number): Producto;
  update(id: number, updateProductoDto: UpdateProductoDto): boolean;
  remove(id: number): boolean;
}
