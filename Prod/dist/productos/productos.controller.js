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
exports.ProductosController = void 0;
const common_1 = require("@nestjs/common");
const productos_service_1 = require("./productos.service");
const create_producto_dto_1 = require("./dto/create-producto.dto");
const swagger_1 = require("@nestjs/swagger");
const responseDto_1 = require("./outputDto/responseDto");
const update_producto_dto_1 = require("./dto/update-producto.dto");
let ProductosController = class ProductosController {
    constructor(productosService) {
        this.productosService = productosService;
    }
    async create(createProductoDto, res) {
        const result = await this.productosService.create(createProductoDto);
        if (result.status == 201) {
            return res.status(common_1.HttpStatus.CREATED).json(result);
        }
        else {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json(result);
        }
    }
    async findAll(page = 1, pageSize = 10) {
        page = Number(page);
        pageSize = Number(pageSize);
        return await this.productosService.findAll(page, pageSize);
    }
    async findOne(id) {
        const producto = await this.productosService.findOne(+id);
        if (!producto) {
            throw new common_1.HttpException('Producto no encontrado', common_1.HttpStatus.NOT_FOUND);
        }
        return producto;
    }
    async update(id, updateProductoDto) {
        return await this.productosService.update(id, updateProductoDto);
    }
    async remove(id, res) {
        const result = await this.productosService.remove(id);
        if (result.status === 200) {
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
exports.ProductosController = ProductosController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Producto creado exitosamente.',
        type: responseDto_1.ResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Error en los datos enviados',
        type: responseDto_1.ResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Tipo de producto o categoría no encontrada',
        type: responseDto_1.ResponseDto,
    }),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true, forbidNonWhitelisted: true })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_producto_dto_1.CreateProductoDto, Object]),
    __metadata("design:returntype", Promise)
], ProductosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de productos obtenida exitosamente.',
        type: responseDto_1.ResponseDto,
    }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: Number, description: 'Número de página' }),
    (0, swagger_1.ApiQuery)({ name: 'pageSize', required: false, type: Number, description: 'Tamaño de página' }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('pageSize')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Producto encontrado.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Producto no encontrado.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Producto actualizado exitosamente.',
        type: responseDto_1.ResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Producto no encontrado',
        type: responseDto_1.ResponseDto,
    }),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true, forbidNonWhitelisted: true })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_producto_dto_1.UpdateProductoDto]),
    __metadata("design:returntype", Promise)
], ProductosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Producto eliminado.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Producto no encontrado.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ProductosController.prototype, "remove", null);
exports.ProductosController = ProductosController = __decorate([
    (0, swagger_1.ApiTags)('productos'),
    (0, common_1.Controller)('productos'),
    __metadata("design:paramtypes", [productos_service_1.ProductosService])
], ProductosController);
//# sourceMappingURL=productos.controller.js.map