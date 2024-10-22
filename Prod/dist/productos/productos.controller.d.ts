import { ProductosService } from './productos.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Tipos } from './entities/producto.entity';
export declare class ProductosController {
  private readonly productosService;
  constructor(productosService: ProductosService);
  create(createProductoDto: CreateProductoDto): void;
  findAll(tipo: Tipos): import('./entities/producto.entity').Producto[];
  findOne(id: number): import('./entities/producto.entity').Producto;
  update(
    id: number,
    updateProductoDto: UpdateProductoDto,
  ): {
    message: string;
  };
  remove(id: number): {
    message: string;
  };
}
