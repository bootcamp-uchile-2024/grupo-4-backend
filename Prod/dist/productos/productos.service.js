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
const producto_1 = require("../orm/entity/producto");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const producto_mappers_1 = require("./mappers/producto.mappers");
const tipoProducto_1 = require("../orm/entity/tipoProducto");
const categoria_1 = require("../orm/entity/categoria");
let ProductosService = class ProductosService {
    constructor(productosRepository, tipoProductoRepository, categoriaRepository) {
        this.productosRepository = productosRepository;
        this.tipoProductoRepository = tipoProductoRepository;
        this.categoriaRepository = categoriaRepository;
        this.productos = [];
    }
    async create(createProductoDto) {
        const tiposProductos = await this.getAllTiposProducto();
        const categoriasProductos = await this.getAllCategorias();
        const nuevoProducto = new producto_1.Productos();
        nuevoProducto.nombre = createProductoDto.nombre;
        nuevoProducto.descripcion = createProductoDto.descripcion;
        nuevoProducto.precio = createProductoDto.precio;
        nuevoProducto.imagen = createProductoDto.imagen;
        nuevoProducto.stock = createProductoDto.stock;
        nuevoProducto.marca = createProductoDto.marca;
        nuevoProducto.formato = createProductoDto.formato;
        nuevoProducto.fechaVencimiento = createProductoDto.fecha;
        const findTipo = tiposProductos.find(tipo => tipo.nombre.toLocaleLowerCase().trim() === createProductoDto.tipo.toLocaleLowerCase().trim());
        console.log('findTipo', findTipo);
        const findCategoria = categoriasProductos.find(categoria => categoria.nombre.toLocaleLowerCase().trim() === createProductoDto.categorias.toLocaleLowerCase().trim());
        if (!findTipo)
            return {
                status: 404,
                message: 'El tipo no existe'
            };
        if (!findCategoria)
            return {
                status: 404,
                message: 'La categoria no existe'
            };
        nuevoProducto.tipo = findTipo;
        nuevoProducto.categoria = findCategoria;
        const productoGuardado = await this.productosRepository.save(nuevoProducto);
        const productoDto = producto_mappers_1.ProductoMapper.entityToDto(productoGuardado);
        return { status: 201, data: productoDto };
    }
    async findAll(page, pageSize) {
        const [result, total] = await this.productosRepository.findAndCount({
            skip: (page - 1) * pageSize,
            take: pageSize,
        });
        const data = producto_mappers_1.ProductoMapper.entityListToDtoList(result);
        return {
            status: 200,
            data,
            page,
            pageSize,
            totalItems: total,
            totalPages: Math.ceil(total / pageSize),
        };
    }
    async findOne(id) {
        const producto = await this.productosRepository.findOneBy({ id: id });
        return producto_mappers_1.ProductoMapper.entityToDto(producto);
    }
    async update(id, updateProductoDto) {
        const producto = await this.productosRepository.findOne({
            where: { id },
            relations: ['tipo', 'categoria'],
        });
        if (!producto) {
            return {
                status: 404,
                message: 'Producto no encontrado',
            };
        }
        if (updateProductoDto.nombre) {
            producto.nombre = updateProductoDto.nombre;
        }
        if (updateProductoDto.descripcion) {
            producto.descripcion = updateProductoDto.descripcion;
        }
        if (updateProductoDto.precio) {
            producto.precio = updateProductoDto.precio;
        }
        if (updateProductoDto.imagen) {
            producto.imagen = updateProductoDto.imagen;
        }
        if (updateProductoDto.stock) {
            producto.stock = updateProductoDto.stock;
        }
        if (updateProductoDto.marca) {
            producto.marca = updateProductoDto.marca;
        }
        if (updateProductoDto.formato) {
            producto.formato = updateProductoDto.formato;
        }
        if (updateProductoDto.fecha) {
            producto.fechaVencimiento = updateProductoDto.fecha;
        }
        if (updateProductoDto.tipo) {
            const tipoProducto = await this.tipoProductoRepository.findOne({
                where: { nombre: updateProductoDto.tipo.trim().toLowerCase() },
            });
            if (!tipoProducto) {
                return {
                    status: 404,
                    message: 'El tipo de producto no existe',
                };
            }
            producto.tipo = tipoProducto;
        }
        if (updateProductoDto.categorias) {
            const categoria = await this.categoriaRepository.findOne({
                where: { nombre: updateProductoDto.categorias.trim().toLowerCase() },
            });
            if (!categoria) {
                return {
                    status: 404,
                    message: 'La categoría no existe',
                };
            }
            producto.categoria = categoria;
        }
        const productoActualizado = await this.productosRepository.save(producto);
        const productoDto = producto_mappers_1.ProductoMapper.entityToDto(productoActualizado);
        return {
            status: 200,
            data: productoDto,
        };
    }
    async remove(id) {
        const producto = await this.productosRepository.findOneBy({ id });
        if (!producto) {
            return {
                status: 404,
                message: 'Producto no encontrado',
            };
        }
        await this.productosRepository.delete(id);
        return {
            status: 200,
            message: 'Producto eliminado correctamente',
        };
    }
    async getAllTiposProducto() {
        return await this.tipoProductoRepository.find();
    }
    async getAllCategorias() {
        return await this.categoriaRepository.find();
    }
};
exports.ProductosService = ProductosService;
exports.ProductosService = ProductosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(producto_1.Productos)),
    __param(1, (0, typeorm_1.InjectRepository)(tipoProducto_1.TipoProducto)),
    __param(2, (0, typeorm_1.InjectRepository)(categoria_1.Categoria)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ProductosService);
//# sourceMappingURL=productos.service.js.map