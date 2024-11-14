import { Categoria } from 'src/orm/entity/categoria';
import { TipoProducto } from 'src/orm/entity/tipoProducto';
export declare class ProductoDTO {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    imagen: string;
    stock: number;
    marca: string;
    origen: string;
    tipo: TipoProducto;
    formato: string;
    fecha: Date;
    categoria: Categoria;
    destacado: boolean;
}
