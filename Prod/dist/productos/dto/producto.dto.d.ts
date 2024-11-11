import { CategoriaDTO } from './categoria.dto';
import { TiposProducto } from '../enum/tiposProductoEnum';
export declare class ProductoDTO {
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
    categorias: CategoriaDTO[];
    destacado: boolean;
}
