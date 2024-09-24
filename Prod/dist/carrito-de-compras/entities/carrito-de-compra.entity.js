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
exports.CarritoDeCompra = void 0;
const swagger_1 = require("@nestjs/swagger");
const usuario_carrito_de_compra_dto_1 = require("../dto/usuario-carrito-de-compra.dto");
class CarritoDeCompra {
}
exports.CarritoDeCompra = CarritoDeCompra;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CarritoDeCompra.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", usuario_carrito_de_compra_dto_1.UsuarioCarritoDeCompraDto)
], CarritoDeCompra.prototype, "usuario", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], CarritoDeCompra.prototype, "items", void 0);
;
//# sourceMappingURL=carrito-de-compra.entity.js.map