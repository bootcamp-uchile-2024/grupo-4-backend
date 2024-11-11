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
exports.Productos = void 0;
const typeorm_1 = require("typeorm");
const categoria_1 = require("./categoria");
const tipoProducto_1 = require("./tipoProducto");
const paisOrigen_1 = require("./paisOrigen");
let Productos = class Productos {
};
exports.Productos = Productos;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], Productos.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Productos.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Productos.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Productos.prototype, "imagen", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Productos.prototype, "marca", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Productos.prototype, "formato", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Productos.prototype, "fechaVencimiento", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Productos.prototype, "precio", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Productos.prototype, "stock", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Productos.prototype, "categoriaId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Productos.prototype, "tipoProductoId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Productos.prototype, "paisOrigenId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => categoria_1.Categoria),
    (0, typeorm_1.JoinColumn)({ name: 'categoriaId' }),
    __metadata("design:type", categoria_1.Categoria)
], Productos.prototype, "categoria", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tipoProducto_1.TipoProducto),
    (0, typeorm_1.JoinColumn)({ name: 'tipoProductoId' }),
    __metadata("design:type", tipoProducto_1.TipoProducto)
], Productos.prototype, "tipo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => paisOrigen_1.PaisOrigen),
    (0, typeorm_1.JoinColumn)({ name: 'paisOrigenId' }),
    __metadata("design:type", paisOrigen_1.PaisOrigen)
], Productos.prototype, "paisOrigen", void 0);
exports.Productos = Productos = __decorate([
    (0, typeorm_1.Entity)({ name: 'Producto' })
], Productos);
//# sourceMappingURL=producto.js.map