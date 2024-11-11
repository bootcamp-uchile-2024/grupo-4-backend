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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const tiposProductoEnum_1 = require("../enum/tiposProductoEnum");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class UpdateProductoDto {
}
exports.UpdateProductoDto = UpdateProductoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nombre del producto', example: 'Producto A' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateProductoDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Descripción del producto',
        example: 'Descripción del producto A',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateProductoDto.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Precio del producto', example: 100 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpdateProductoDto.prototype, "precio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Imagen del producto', example: 'imagen.jpg' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateProductoDto.prototype, "imagen", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Stock del producto', example: 10 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpdateProductoDto.prototype, "stock", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Marca del producto', example: 'Marca A' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateProductoDto.prototype, "marca", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Origen del producto', example: 'País A' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateProductoDto.prototype, "origen", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tipo del producto', example: 'Bebidas' }),
    (0, class_validator_1.IsEnum)(tiposProductoEnum_1.TiposProducto),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateProductoDto.prototype, "tipo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Formato del producto', example: 'Formato A' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateProductoDto.prototype, "formato", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Fecha de creación del producto',
        example: '2023-01-01T00:00:00.000Z',
    }),
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], UpdateProductoDto.prototype, "fecha", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Categorías del producto',
        example: ['Categoría A', 'Categoría B'],
    }),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], UpdateProductoDto.prototype, "categorias", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Producto destacado', example: true }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Boolean)
], UpdateProductoDto.prototype, "destacado", void 0);
//# sourceMappingURL=update-producto.dto.js.map