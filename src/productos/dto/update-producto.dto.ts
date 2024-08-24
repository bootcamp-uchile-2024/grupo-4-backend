import { PartialType } from '@nestjs/mapped-types';
import { CreateProductoDto } from './create-producto.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Categorias } from 'src/models/categorias';
import { Tipos } from '../entities/producto.entity';

export class UpdateProductoDto {
    @ApiProperty({ default: 'Nombre' })
    nombre: string;

    @ApiProperty({ default: 'descripcion' })
    descripcion: string;

    @ApiProperty({ default: 0 })
    precio: number;

    @ApiProperty({ default: 'imagen' })
    imagen: string;

    @ApiProperty({ default: 0 })
    stock: number;

    @ApiProperty({ default: 'marca' })
    marca: string;

    @ApiProperty({ default: 'origen' })
    origen: string;

    @ApiProperty({ default: Tipos.Accesorios })
    tipo: Tipos;   

    @ApiProperty({ default: '200gr' })
    formato: string;

    @ApiProperty({ default: new Date() })
    fecha: Date;

    @ApiProperty({ default: [{ id: 0, nombre: 'categoria' }] })
    categorias: Categorias[];  

    @ApiProperty({ default: false })
    destacado: boolean;
};
