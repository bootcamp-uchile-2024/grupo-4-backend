import { Categoria } from "./categoria";
import { TipoProducto } from "./tipoProducto";
import { PaisOrigen } from "./paisOrigen";
export declare class Productos {
    id: number;
    nombre: string;
    descripcion: string;
    imagen: string;
    marca: string;
    formato: string;
    fechaVencimiento: Date;
    precio: number;
    stock: number;
    categoriaId: number;
    tipoProductoId: number;
    paisOrigenId: number;
    categoria: Categoria;
    tipo: TipoProducto;
    paisOrigen: PaisOrigen;
}
