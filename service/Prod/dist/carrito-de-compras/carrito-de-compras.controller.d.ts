import { CarritoDeComprasService } from './carrito-de-compras.service';
import { CreateCarritoDeCompraDto } from './dto/create-carrito-de-compra.dto';
import { UpdateCarritoDeCompraDto } from './dto/update-carrito-de-compra.dto';
export declare class CarritoDeComprasController {
  private readonly carritoDeComprasService;
  constructor(carritoDeComprasService: CarritoDeComprasService);
  create(
    createCarritoDeCompraDto: CreateCarritoDeCompraDto,
  ): import('./entities/carrito-de-compra.entity').CarritoDeCompra;
  findCarritoByUser(
    id: number,
  ): import('./entities/carrito-de-compra.entity').CarritoDeCompra[];
  findOne(
    id: number,
  ): import('./entities/carrito-de-compra.entity').CarritoDeCompra;
  update(
    id: number,
    updateCarritoDeCompraDto: UpdateCarritoDeCompraDto,
  ): {
    message: string;
  };
  remove(id: number): {
    message: string;
  };
  updateEstado(
    id: number,
    estadoCarrito: number,
  ): {
    message: string;
  };
}
