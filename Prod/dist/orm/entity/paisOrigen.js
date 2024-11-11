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
exports.PaisOrigen = void 0;
const typeorm_1 = require("typeorm");
const producto_1 = require("./producto");
let PaisOrigen = class PaisOrigen {
};
exports.PaisOrigen = PaisOrigen;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], PaisOrigen.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PaisOrigen.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => producto_1.Productos, producto => producto.paisOrigen),
    __metadata("design:type", Array)
], PaisOrigen.prototype, "productos", void 0);
exports.PaisOrigen = PaisOrigen = __decorate([
    (0, typeorm_1.Entity)({ name: 'PaisOrigen' })
], PaisOrigen);
//# sourceMappingURL=paisOrigen.js.map