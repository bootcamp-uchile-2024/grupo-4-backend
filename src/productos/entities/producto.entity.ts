import { Tipos } from '../models/tipos';
import { Categoria } from './categorias.entity';



export class Producto {

  id: number;  
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
  categorias: Categoria[];  
  destacado: boolean;
}




