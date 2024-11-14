import { CarritoDeComprasService } from './carrito-de-compras.service';
import { CreateCarritoDeCompraDto } from './dto/create-carrito-de-compra.dto';
import { UpdateCarritoDeCompraDto } from './dto/update-carrito-de-compra.dto';
import { Response } from 'express';
import { CarritoDeComprasDto } from './dto/carrito-de-compras.dto';
export declare class CarritoDeComprasController {
    private readonly carritoDeComprasService;
    constructor(carritoDeComprasService: CarritoDeComprasService);
    create(createCarritoDeCompraDto: CreateCarritoDeCompraDto, res: Response): Promise<Response>;
    findCarritoByUser(id: number, res: Response): Promise<Response<CarritoDeComprasDto[]>>;
    findOne(id: number, res: Response): Promise<Response<CarritoDeComprasDto>>;
    update(id: number, updateCarritoDeCompraDto: UpdateCarritoDeCompraDto, res: Response): Promise<Response<CarritoDeComprasDto>>;
    remove(id: number, res: Response): Promise<Response<CarritoDeComprasDto>>;
}
