import {TiposProducto } from 'src/productos/enum/tiposProductoEnum';
import { Categoria } from './categorias.entity';
import { IsArray, IsBoolean, IsDate, IsEnum, IsInt, IsNumber, IsString, Length, Min } from 'class-validator';



export class Producto {

  @IsInt()
  id: number;

  @IsString()
  @Length(1, 100)
  nombre: string;

  @IsString()
  @Length(1, 500)
  descripcion: string;

  @IsNumber()
  @Min(0)
  precio: number;

  @IsString()  
  imagen: string;

  @IsInt()
  @Min(0)
  stock: number;

  @IsString()
  @Length(1, 50)
  marca: string;

  @IsString()
  @Length(1, 50)
  origen: string;

  @IsEnum(TiposProducto)
  tipo: TiposProducto;

  @IsString()
  @Length(1, 50)
  formato: string;

  @IsDate()
  fecha: Date;

  @IsArray()
  categorias: Categoria[];

  @IsBoolean()
  destacado: boolean;
}




