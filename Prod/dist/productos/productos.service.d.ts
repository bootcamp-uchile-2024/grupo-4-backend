import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from './entities/producto.entity';
import { Productos } from 'src/orm/entity/producto';
import { Repository } from 'typeorm';
import { TipoProducto } from 'src/orm/entity/tipoProducto';
import { Categoria } from 'src/orm/entity/categoria';
import { ResponseDto } from './outputDto/responseDto';
import { ProductoDTO } from './dto/producto.dto';
import { ResponseAllProductsDto } from './outputDto/responseAllProductsDto';
export declare class ProductosService {
    private productosRepository;
    private tipoProductoRepository;
    private categoriaRepository;
    constructor(productosRepository: Repository<Productos>, tipoProductoRepository: Repository<TipoProducto>, categoriaRepository: Repository<Categoria>);
    productos: Producto[];
    create(createProductoDto: CreateProductoDto): Promise<ResponseDto<ProductoDTO>>;
    findAll(page: number, pageSize: number): Promise<ResponseAllProductsDto<ProductoDTO[]>>;
    findOne(id: number): Promise<ProductoDTO>;
    update(id: number, updateProductoDto: UpdateProductoDto): Promise<ResponseDto<ProductoDTO>>;
    remove(id: number): Promise<ResponseDto<null>>;
    getAllTiposProducto(): Promise<TipoProducto[]>;
    getAllCategorias(): Promise<Categoria[]>;
}
