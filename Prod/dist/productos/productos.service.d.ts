import { CreateProductoDto } from './dto/create-producto.dto';
import { Producto } from './entities/producto.entity';
import { ProductoDTO } from './dto/producto.dto';
import { Productos } from 'src/orm/entity/producto';
import { Repository } from 'typeorm';
export declare class ProductosService {
    private productosRepository;
    constructor(productosRepository: Repository<Productos>);
    productos: Producto[];
    create(createProductoDto: CreateProductoDto): ProductoDTO;
    findAll(): Promise<ProductoDTO[]>;
    findOne(id: number): Promise<ProductoDTO>;
    remove(id: number): boolean;
}
