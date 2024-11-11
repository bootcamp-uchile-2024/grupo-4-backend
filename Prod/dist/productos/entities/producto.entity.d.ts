import { TiposProducto } from 'src/productos/enum/tiposProductoEnum';
import { Categoria } from './categorias.entity';
export declare class Producto {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    imagen: string;
    stock: number;
    marca: string;
    origen: string;
    tipo: TiposProducto;
    formato: string;
    fecha: Date;
    categorias: Categoria[];
    destacado: boolean;
}
