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
exports.ResponseAllProductsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class ResponseAllProductsDto {
}
exports.ResponseAllProductsDto = ResponseAllProductsDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Código de estado de la respuesta' }),
    __metadata("design:type", Number)
], ResponseAllProductsDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Datos devueltos por la operación', required: false }),
    __metadata("design:type", Object)
], ResponseAllProductsDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Mensaje de error o éxito', required: false }),
    __metadata("design:type", String)
], ResponseAllProductsDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Número de página actual', required: false }),
    __metadata("design:type", Number)
], ResponseAllProductsDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tamaño de página', required: false }),
    __metadata("design:type", Number)
], ResponseAllProductsDto.prototype, "pageSize", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total de elementos', required: false }),
    __metadata("design:type", Number)
], ResponseAllProductsDto.prototype, "totalItems", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total de páginas', required: false }),
    __metadata("design:type", Number)
], ResponseAllProductsDto.prototype, "totalPages", void 0);
//# sourceMappingURL=responseAllProductsDto.js.map