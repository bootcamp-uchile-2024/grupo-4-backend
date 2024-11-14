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
exports.CreateCarritoDeCompraDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const create_carrito_item_dto_1 = require("./create-carrito-item.dto");
const swagger_1 = require("@nestjs/swagger");
class CreateCarritoDeCompraDto {
}
exports.CreateCarritoDeCompraDto = CreateCarritoDeCompraDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID del usuario que realiza la compra',
        example: 1,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateCarritoDeCompraDto.prototype, "usuarioId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Lista de items en el carrito de compras',
        type: [create_carrito_item_dto_1.CreateCarritoItemDto],
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayNotEmpty)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => create_carrito_item_dto_1.CreateCarritoItemDto),
    __metadata("design:type", Array)
], CreateCarritoDeCompraDto.prototype, "items", void 0);
//# sourceMappingURL=create-carrito-de-compra.dto.js.map