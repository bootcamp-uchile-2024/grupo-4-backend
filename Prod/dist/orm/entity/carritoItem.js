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
exports.CarritoItem = void 0;
const typeorm_1 = require("typeorm");
const carritoDeCompras_1 = require("./carritoDeCompras");
const producto_1 = require("./producto");
let CarritoItem = class CarritoItem {
};
exports.CarritoItem = CarritoItem;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], CarritoItem.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CarritoItem.prototype, "productoId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CarritoItem.prototype, "cantidad", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CarritoItem.prototype, "carritoDeComprasId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => carritoDeCompras_1.CarritoDeCompras, (carritoDeCompras) => carritoDeCompras.carritoItem),
    __metadata("design:type", Array)
], CarritoItem.prototype, "carritosDeCompras", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => producto_1.Productos, (producto) => producto.carritoItem),
    __metadata("design:type", Array)
], CarritoItem.prototype, "productos", void 0);
exports.CarritoItem = CarritoItem = __decorate([
    (0, typeorm_1.Entity)({ name: 'CarritoItem' })
], CarritoItem);
//# sourceMappingURL=carritoItem.js.map