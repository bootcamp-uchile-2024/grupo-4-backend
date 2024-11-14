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
exports.CarritoDeComprasController = void 0;
const common_1 = require("@nestjs/common");
const carrito_de_compras_service_1 = require("./carrito-de-compras.service");
const create_carrito_de_compra_dto_1 = require("./dto/create-carrito-de-compra.dto");
const update_carrito_de_compra_dto_1 = require("./dto/update-carrito-de-compra.dto");
const swagger_1 = require("@nestjs/swagger");
const responseDto_1 = require("./outputDto/responseDto");
const carrito_de_compras_dto_1 = require("./dto/carrito-de-compras.dto");
let CarritoDeComprasController = class CarritoDeComprasController {
    constructor(carritoDeComprasService) {
        this.carritoDeComprasService = carritoDeComprasService;
    }
    async create(createCarritoDeCompraDto, res) {
        const result = await this.carritoDeComprasService.create(createCarritoDeCompraDto);
        if (result.status == 201) {
            return res.status(common_1.HttpStatus.CREATED).json(result);
        }
        else {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json(result);
        }
    }
    async findCarritoByUser(id, res) {
        const result = await this.carritoDeComprasService.findCarritoByUsuarioId(id);
        if (result.status == 200) {
            return res.status(common_1.HttpStatus.OK).json(result);
        }
        else if (result.status === 404) {
            return res.status(common_1.HttpStatus.NOT_FOUND).json(result);
        }
        else {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json(result);
        }
    }
    async findOne(id, res) {
        const result = await this.carritoDeComprasService.findOne(id);
        if (result.status == 200) {
            return res.status(common_1.HttpStatus.OK).json(result);
        }
        else if (result.status === 404) {
            return res.status(common_1.HttpStatus.NOT_FOUND).json(result);
        }
        else {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json(result);
        }
    }
    async update(id, updateCarritoDeCompraDto, res) {
        const result = await this.carritoDeComprasService.update(id, updateCarritoDeCompraDto);
        if (result.status == 200) {
            return res.status(common_1.HttpStatus.OK).json(result);
        }
        else if (result.status === 404) {
            return res.status(common_1.HttpStatus.NOT_FOUND).json(result);
        }
        else {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json(result);
        }
    }
    async remove(id, res) {
        const result = await this.carritoDeComprasService.remove(id);
        if (result.status == 200) {
            return res.status(common_1.HttpStatus.OK).json(result);
        }
        else if (result.status === 404) {
            return res.status(common_1.HttpStatus.NOT_FOUND).json(result);
        }
        else {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json(result);
        }
    }
};
exports.CarritoDeComprasController = CarritoDeComprasController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Carrito creado exitosamente.',
        type: responseDto_1.ResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Error en los datos enviados',
        type: responseDto_1.ResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Usuario o producto no existe',
        type: responseDto_1.ResponseDto,
    }),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true, forbidNonWhitelisted: true })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_carrito_de_compra_dto_1.CreateCarritoDeCompraDto, Object]),
    __metadata("design:returntype", Promise)
], CarritoDeComprasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/usuario/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener carritos de un usuario' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Carritos encontrados.', type: [carrito_de_compras_dto_1.CarritoDeComprasDto] }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Usuario no encontrado.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], CarritoDeComprasController.prototype, "findCarritoByUser", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener un carrito por su ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Carrito encontrado.', type: carrito_de_compras_dto_1.CarritoDeComprasDto }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Carrito no encontrado.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], CarritoDeComprasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar un carrito' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'El carrito fue modificado con éxito.',
        type: carrito_de_compras_dto_1.CarritoDeComprasDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Carrito, usuario o producto no encontrado.' }),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true, forbidNonWhitelisted: true })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_carrito_de_compra_dto_1.UpdateCarritoDeCompraDto, Object]),
    __metadata("design:returntype", Promise)
], CarritoDeComprasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar un carrito' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'El carrito fue eliminado con éxito.',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Carrito no encontrado.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], CarritoDeComprasController.prototype, "remove", null);
exports.CarritoDeComprasController = CarritoDeComprasController = __decorate([
    (0, swagger_1.ApiTags)('carrito-de-compras'),
    (0, common_1.Controller)('carrito-de-compras'),
    __metadata("design:paramtypes", [carrito_de_compras_service_1.CarritoDeComprasService])
], CarritoDeComprasController);
//# sourceMappingURL=carrito-de-compras.controller.js.map