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
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CarritoItem.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CarritoItem.prototype, "cantidad", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => producto_1.Productos, (producto) => producto.carritoItem),
    (0, typeorm_1.JoinColumn)({ name: 'productoId' }),
    __metadata("design:type", producto_1.Productos)
], CarritoItem.prototype, "producto", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => carritoDeCompras_1.CarritoDeCompras, (carritoDeCompras) => carritoDeCompras.items),
    (0, typeorm_1.JoinColumn)({ name: 'carritoDeComprasId' }),
    __metadata("design:type", carritoDeCompras_1.CarritoDeCompras)
], CarritoItem.prototype, "carritoDeCompras", void 0);
exports.CarritoItem = CarritoItem = __decorate([
    (0, typeorm_1.Entity)({ name: 'CarritoItem' })
], CarritoItem);
//# sourceMappingURL=carritoItem.js.map