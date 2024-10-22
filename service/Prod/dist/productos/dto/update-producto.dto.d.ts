import { Categorias } from 'src/models/categorias';
import { Tipos } from '../entities/producto.entity';
export declare class UpdateProductoDto {
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  stock: number;
  marca: string;
  origen: string;
  tipo: Tipos;
  formato: string;
  fecha: Date;
  categorias: Categorias[];
  destacado: boolean;
}
