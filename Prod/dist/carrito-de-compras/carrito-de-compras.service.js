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
exports.CarritoDeComprasService = void 0;
const common_1 = require("@nestjs/common");
const usuario_service_1 = require("../usuario/usuario.service");
const productos_service_1 = require("../productos/productos.service");
const typeorm_1 = require("@nestjs/typeorm");
const carritoDeCompras_1 = require("../orm/entity/carritoDeCompras");
const typeorm_2 = require("typeorm");
const usuario_1 = require("../orm/entity/usuario");
const producto_1 = require("../orm/entity/producto");
const carritoItem_1 = require("../orm/entity/carritoItem");
const carrito_de_compras_dto_1 = require("./dto/carrito-de-compras.dto");
const carrito_item_dto_1 = require("./dto/carrito-item.dto");
let CarritoDeComprasService = class CarritoDeComprasService {
    constructor(CarritoDeComprasRepository, UsuariosRepository, ProductosRepository, CarritoItemRepository, usuarioService, productoService) {
        this.CarritoDeComprasRepository = CarritoDeComprasRepository;
        this.UsuariosRepository = UsuariosRepository;
        this.ProductosRepository = ProductosRepository;
        this.CarritoItemRepository = CarritoItemRepository;
        this.usuarioService = usuarioService;
        this.productoService = productoService;
        this.carritoDeCompras = [];
    }
    async create(createCarritoDeCompraDto) {
        const usuario = await this.UsuariosRepository.findOne({
            where: { id: createCarritoDeCompraDto.usuarioId },
        });
        console.log('usuario', usuario);
        if (!usuario)
            return {
                status: 404,
                message: 'El usuario no existe'
            };
        const productosId = createCarritoDeCompraDto.items.map((item) => item.productoId);
        const productos = await this.ProductosRepository.findBy({
            id: (0, typeorm_2.In)(productosId),
        });
        console.log('productos', productos);
        if (productos.length !== productosId.length)
            return {
                status: 404,
                message: 'Uno o más productos no fueron encontrados'
            };
        const carrito = new carritoDeCompras_1.CarritoDeCompras();
        carrito.usuario = usuario;
        const carritoCreado = await this.CarritoDeComprasRepository.save(carrito);
        const items = [];
        for (const itemDto of createCarritoDeCompraDto.items) {
            const producto = productos.find(p => p.id === itemDto.productoId);
            const carritoItem = new carritoItem_1.CarritoItem();
            carritoItem.producto = producto;
            carritoItem.cantidad = itemDto.cantidad;
            carritoItem.carritoDeCompras = carritoCreado;
            await this.CarritoItemRepository.save(carritoItem);
            items.push(carritoItem);
        }
        carritoCreado.items = items;
        const carritoDto = new carrito_de_compras_dto_1.CarritoDeComprasDto();
        carritoDto.id = carritoCreado.id;
        carritoDto.usuarioId = carritoCreado.usuario.id;
        carritoDto.items = carritoCreado.items.map(item => {
            const itemDto = new carrito_item_dto_1.CarritoItemDto();
            itemDto.id = item.id;
            itemDto.cantidad = item.cantidad;
            itemDto.productoId = item.producto.id;
            return itemDto;
        });
        return {
            status: 201,
            data: carritoDto,
        };
    }
    async findCarritoByUsuarioId(usuarioId) {
        const usuario = await this.UsuariosRepository.findOne({
            where: { id: usuarioId },
        });
        if (!usuario)
            return {
                status: 404,
                message: 'El usuario no existe'
            };
        const carritos = await this.CarritoDeComprasRepository.find({
            where: { usuario: { id: usuarioId } },
            relations: ['items', 'items.producto'],
        });
        const carritoDtos = carritos.map(carrito => {
            const carritoDto = new carrito_de_compras_dto_1.CarritoDeComprasDto();
            carritoDto.id = carrito.id;
            carritoDto.usuarioId = carrito.usuario.id;
            carritoDto.items = carrito.items.map(item => {
                const itemDto = new carrito_item_dto_1.CarritoItemDto();
                itemDto.id = item.id;
                itemDto.cantidad = item.cantidad;
                itemDto.productoId = item.producto.id;
                return itemDto;
            });
            return carritoDto;
        });
        return {
            status: 200,
            data: carritoDtos,
        };
    }
    async findOne(id) {
        const carrito = await this.CarritoDeComprasRepository.findOne({
            where: { id },
            relations: ['usuario', 'items', 'items.producto'],
        });
        if (!carrito)
            return {
                status: 404,
                message: 'Carrito no encontrado'
            };
        const carritoDto = new carrito_de_compras_dto_1.CarritoDeComprasDto();
        carritoDto.id = carrito.id;
        carritoDto.usuarioId = carrito.usuario.id;
        carritoDto.items = carrito.items.map(item => {
            const itemDto = new carrito_item_dto_1.CarritoItemDto();
            itemDto.id = item.id;
            itemDto.cantidad = item.cantidad;
            itemDto.productoId = item.producto.id;
            return itemDto;
        });
        return {
            status: 200,
            data: carritoDto,
        };
    }
    async update(id, updateCarritoDeCompraDto) {
        const carrito = await this.CarritoDeComprasRepository.findOne({
            where: { id },
            relations: ['items'],
        });
        if (!carrito)
            return {
                status: 404,
                message: 'Carrito no encontrado'
            };
        if (updateCarritoDeCompraDto.usuarioId) {
            const usuario = await this.UsuariosRepository.findOne({
                where: { id: updateCarritoDeCompraDto.usuarioId },
            });
            if (!usuario)
                return {
                    status: 404,
                    message: 'El usuario no existe'
                };
            carrito.usuario = usuario;
        }
        if (updateCarritoDeCompraDto.items) {
            await this.CarritoItemRepository.delete({ carritoDeCompras: { id } });
            const productosId = updateCarritoDeCompraDto.items.map(item => item.productoId);
            const productos = await this.ProductosRepository.findBy({ id: (0, typeorm_2.In)(productosId) });
            if (productos.length !== productosId.length)
                return {
                    status: 404,
                    message: 'Uno o más productos no fueron encontrados'
                };
            const items = [];
            for (const itemDto of updateCarritoDeCompraDto.items) {
                const producto = productos.find(p => p.id === itemDto.productoId);
                const carritoItem = new carritoItem_1.CarritoItem();
                carritoItem.producto = producto;
                carritoItem.cantidad = itemDto.cantidad;
                carritoItem.carritoDeCompras = carrito;
                await this.CarritoItemRepository.save(carritoItem);
                items.push(carritoItem);
            }
            carrito.items = items;
        }
        const carritoActualizado = await this.CarritoDeComprasRepository.save(carrito);
        const carritoDto = new carrito_de_compras_dto_1.CarritoDeComprasDto();
        carritoDto.id = carritoActualizado.id;
        carritoDto.usuarioId = carritoActualizado.usuario.id;
        carritoDto.items = carritoActualizado.items.map(item => {
            const itemDto = new carrito_item_dto_1.CarritoItemDto();
            itemDto.id = item.id;
            itemDto.cantidad = item.cantidad;
            itemDto.productoId = item.producto.id;
            return itemDto;
        });
        return {
            status: 200,
            data: carritoDto,
        };
    }
    async remove(id) {
        const carrito = await this.CarritoDeComprasRepository.findOne({
            where: { id },
        });
        if (!carrito)
            return {
                status: 404,
                message: 'Carrito no encontrado'
            };
        await this.CarritoItemRepository.delete({ carritoDeCompras: { id } });
        await this.CarritoDeComprasRepository.delete(id);
        return {
            status: 200,
            message: 'Carrito eliminado correctamente',
        };
    }
};
exports.CarritoDeComprasService = CarritoDeComprasService;
exports.CarritoDeComprasService = CarritoDeComprasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(carritoDeCompras_1.CarritoDeCompras)),
    __param(1, (0, typeorm_1.InjectRepository)(usuario_1.Usuarios)),
    __param(2, (0, typeorm_1.InjectRepository)(producto_1.Productos)),
    __param(3, (0, typeorm_1.InjectRepository)(carritoItem_1.CarritoItem)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        usuario_service_1.UsuarioService,
        productos_service_1.ProductosService])
], CarritoDeComprasService);
//# sourceMappingURL=carrito-de-compras.service.js.map