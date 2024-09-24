import { Categorias } from "src/models/categorias";
export declare enum Tipos {
    Accesorios = "Accesorios",
    Bebidas = "Bebidas",
    Box = "Box"
}
export declare class Producto {
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
    categorias: Categorias[];
    destacado: boolean;
}
