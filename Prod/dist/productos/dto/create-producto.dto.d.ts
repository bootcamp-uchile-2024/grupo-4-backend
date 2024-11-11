import { Categoria } from 'src/productos/entities/categorias.entity';
import { TiposProducto } from 'src/productos/enum/tiposProductoEnum';
export declare class CreateProductoDto {
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
