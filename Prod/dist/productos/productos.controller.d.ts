import { ProductosService } from './productos.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { ProductoDTO } from './dto/producto.dto';
import { ResponseDto } from './outputDto/responseDto';
import { Response } from 'express';
import { ResponseAllProductsDto } from './outputDto/responseAllProductsDto';
import { UpdateProductoDto } from './dto/update-producto.dto';
export declare class ProductosController {
    private readonly productosService;
    constructor(productosService: ProductosService);
<<<<<<< HEAD
    create(createProductoDto: CreateProductoDto, res: Response): Promise<Response>;
    findAll(page?: number, pageSize?: number): Promise<ResponseAllProductsDto<ProductoDTO[]>>;
    findOne(id: string): Promise<ProductoDTO>;
    update(id: number, updateProductoDto: UpdateProductoDto): Promise<ResponseDto<ProductoDTO>>;
    remove(id: number, res: Response): Promise<Response>;
=======
    create(createProductoDto: CreateProductoDto): void;
    findAll(): Promise<ProductoDTO[]>;
    findOne(id: number): Promise<ProductoDTO>;
>>>>>>> 23cb33c23a9df542c0b0d5c31518f1a86f82bd02
}
