"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductosService = void 0;
const common_1 = require("@nestjs/common");
const producto_entity_1 = require("./entities/producto.entity");
let ProductosService = class ProductosService {
    constructor() {
        this.productos = [];
    }
    create(createProductoDto) {
        const nuevoProducto = new producto_entity_1.Producto();
        nuevoProducto.id = this.productos.length + 1;
        nuevoProducto.nombre = createProductoDto.nombre;
        nuevoProducto.descripcion = createProductoDto.descripcion;
        nuevoProducto.precio = createProductoDto.precio;
        nuevoProducto.imagen = createProductoDto.imagen;
        nuevoProducto.stock = createProductoDto.stock;
        nuevoProducto.marca = createProductoDto.marca;
        nuevoProducto.origen = createProductoDto.origen;
        nuevoProducto.tipo = createProductoDto.tipo;
        nuevoProducto.formato = createProductoDto.formato;
        nuevoProducto.fecha = createProductoDto.fecha;
        nuevoProducto.categorias = createProductoDto.categorias;
        nuevoProducto.destacado = createProductoDto.destacado;
        this.productos.push(nuevoProducto);
        return nuevoProducto;
    }
    ;
    findAll(tipo) {
        if (tipo !== undefined) {
            return this.productos.filter(producto => producto.tipo === tipo);
        }
        return this.productos;
    }
    ;
    findOne(id) {
        const producto = this.productos.find(producto => producto.id == id);
        return producto ? producto : null;
    }
    ;
    update(id, updateProductoDto) {
        const producto = this.findOne(id);
        console.log('producto: ', producto);
        if (!producto)
            return false;
        producto.nombre = updateProductoDto.nombre;
        producto.descripcion = updateProductoDto.descripcion;
        producto.precio = updateProductoDto.precio;
        producto.imagen = updateProductoDto.imagen;
        producto.stock = updateProductoDto.stock;
        producto.marca = updateProductoDto.marca;
        producto.origen = updateProductoDto.origen;
        producto.tipo = updateProductoDto.tipo;
        producto.formato = updateProductoDto.formato;
        producto.fecha = updateProductoDto.fecha;
        producto.categorias = updateProductoDto.categorias;
        producto.destacado = updateProductoDto.destacado;
        return true;
    }
    ;
    remove(id) {
        const producto = this.findOne(id);
        if (!producto)
            return false;
        this.productos.forEach(producto => {
            if (producto.id == id) {
                this.productos.splice(this.productos.indexOf(producto), 1);
            }
        });
        return true;
    }
    ;
};
exports.ProductosService = ProductosService;
exports.ProductosService = ProductosService = __decorate([
    (0, common_1.Injectable)()
], ProductosService);
//# sourceMappingURL=productos.service.js.map