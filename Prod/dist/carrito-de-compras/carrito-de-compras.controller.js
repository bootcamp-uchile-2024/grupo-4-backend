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
let CarritoDeComprasController = class CarritoDeComprasController {
    constructor(carritoDeComprasService) {
        this.carritoDeComprasService = carritoDeComprasService;
    }
    create(createCarritoDeCompraDto) {
        const carrito = this.carritoDeComprasService.create(createCarritoDeCompraDto);
        if (!carrito) {
            throw new common_1.HttpException('Usuario o producto no existe', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return carrito;
    }
    findCarritoByUser(id) {
        const carrito = this.carritoDeComprasService.findCarritoByUsuarioId(id);
        if (!carrito) {
            throw new common_1.HttpException('Usuario no encontrado', common_1.HttpStatus.NOT_FOUND);
        }
        return carrito;
    }
    findOne(id) {
        const carrito = this.carritoDeComprasService.findOne(id);
        if (!carrito) {
            throw new common_1.HttpException('Carrito no encontrado', common_1.HttpStatus.NOT_FOUND);
        }
        return carrito;
    }
    update(id, updateCarritoDeCompraDto) {
        const carritoFueModificado = this.carritoDeComprasService.update(id, updateCarritoDeCompraDto);
        if (!carritoFueModificado) {
            throw new common_1.HttpException('El carrito no fue modificado', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return { message: 'El carrito fue modificado con éxito' };
    }
    remove(id) {
        const carritoFueEliminado = this.carritoDeComprasService.remove(id);
        if (!carritoFueEliminado) {
            throw new common_1.HttpException('Carrito no encontrado', common_1.HttpStatus.NOT_FOUND);
        }
        return { message: 'El carrito fue eliminado con éxito' };
    }
    updateEstado(id, estadoCarrito) {
        const carritoFueModificado = this.carritoDeComprasService.updateEstado(id, estadoCarrito);
        if (!carritoFueModificado) {
            throw new common_1.HttpException('El carrito no fue modificado', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return { message: 'El estado del carrito fue modificado con éxito' };
    }
};
exports.CarritoDeComprasController = CarritoDeComprasController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Carrito creado exitosamente.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Usuario o producto no existe.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_carrito_de_compra_dto_1.CreateCarritoDeCompraDto]),
    __metadata("design:returntype", void 0)
], CarritoDeComprasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/usuario/:id'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Carrito encontrado.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Usuario no encontrado.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CarritoDeComprasController.prototype, "findCarritoByUser", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Carrito encontrado.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Carrito no encontrado.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CarritoDeComprasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'El carrito fue modificado con éxito.',
    }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Usuario o producto no existe.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_carrito_de_compra_dto_1.UpdateCarritoDeCompraDto]),
    __metadata("design:returntype", void 0)
], CarritoDeComprasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'El carrito fue eliminado con éxito.',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Carrito no encontrado.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CarritoDeComprasController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)(':id/estado'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'El estado del carrito fue modificado con éxito.',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Carrito no encontrado.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], CarritoDeComprasController.prototype, "updateEstado", null);
exports.CarritoDeComprasController = CarritoDeComprasController = __decorate([
    (0, swagger_1.ApiTags)('carrito-de-compras'),
    (0, common_1.Controller)('carrito-de-compras'),
    __metadata("design:paramtypes", [carrito_de_compras_service_1.CarritoDeComprasService])
], CarritoDeComprasController);
//# sourceMappingURL=carrito-de-compras.controller.js.map