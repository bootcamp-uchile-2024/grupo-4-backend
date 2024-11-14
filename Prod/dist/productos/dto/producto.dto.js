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
exports.ProductoDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const categoria_1 = require("../../orm/entity/categoria");
const tipoProducto_1 = require("../../orm/entity/tipoProducto");
class ProductoDTO {
}
exports.ProductoDTO = ProductoDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ProductoDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ProductoDTO.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ProductoDTO.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ProductoDTO.prototype, "precio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ProductoDTO.prototype, "imagen", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ProductoDTO.prototype, "stock", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ProductoDTO.prototype, "marca", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ProductoDTO.prototype, "origen", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", tipoProducto_1.TipoProducto)
], ProductoDTO.prototype, "tipo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ProductoDTO.prototype, "formato", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], ProductoDTO.prototype, "fecha", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", categoria_1.Categoria)
], ProductoDTO.prototype, "categoria", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], ProductoDTO.prototype, "destacado", void 0);
//# sourceMappingURL=producto.dto.js.map