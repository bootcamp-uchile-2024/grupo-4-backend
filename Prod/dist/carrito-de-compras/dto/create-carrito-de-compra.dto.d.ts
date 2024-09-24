import { UsuarioCarritoDeCompraDto } from "./usuario-carrito-de-compra.dto";
import { CarritoItem } from "../entities/carrito-item.entity";
export declare class CreateCarritoDeCompraDto {
    usuario: UsuarioCarritoDeCompraDto;
    items: CarritoItem[];
}
