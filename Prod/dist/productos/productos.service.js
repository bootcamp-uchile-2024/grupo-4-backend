"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductosService = void 0;
const common_1 = require("@nestjs/common");
const producto_dto_1 = require("./dto/producto.dto");
const producto_1 = require("../orm/entity/producto");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const producto_mappers_1 = require("./mappers/producto.mappers");
let ProductosService = class ProductosService {
    constructor(productosRepository) {
        this.productosRepository = productosRepository;
        this.productos = [];
    }
    create(createProductoDto) {
        const nuevoProducto = new producto_dto_1.ProductoDTO();
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
    async findAll() {
        const listadoProductos = await this.productosRepository.find();
        return producto_mappers_1.ProductoMapper.entityListToDtoList(listadoProductos);
    }
    async findOne(id) {
        const producto = await this.productosRepository.findOneBy({ id: id });
        return producto_mappers_1.ProductoMapper.entityToDto(producto);
    }
    remove(id) {
        const producto = this.findOne(id);
        if (!producto)
            return false;
        this.productos.forEach((producto) => {
            if (producto.id == id) {
                this.productos.splice(this.productos.indexOf(producto), 1);
            }
        });
        return true;
    }
};
exports.ProductosService = ProductosService;
exports.ProductosService = ProductosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(producto_1.Productos)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProductosService);
//# sourceMappingURL=productos.service.js.map