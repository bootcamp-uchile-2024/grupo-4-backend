import { ProductosService } from './productos.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { ProductoDTO } from './dto/producto.dto';
export declare class ProductosController {
    private readonly productosService;
    constructor(productosService: ProductosService);
    create(createProductoDto: CreateProductoDto): void;
    findAll(): Promise<ProductoDTO[]>;
    findOne(id: number): Promise<ProductoDTO>;
}
