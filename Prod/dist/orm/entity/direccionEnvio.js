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
exports.DireccionEnvio = void 0;
const typeorm_1 = require("typeorm");
const despacho_1 = require("./despacho");
let DireccionEnvio = class DireccionEnvio {
};
exports.DireccionEnvio = DireccionEnvio;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], DireccionEnvio.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DireccionEnvio.prototype, "direccion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DireccionEnvio.prototype, "ciudad", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DireccionEnvio.prototype, "codigoPostal", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], DireccionEnvio.prototype, "usuarioId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => despacho_1.Despacho),
    (0, typeorm_1.JoinColumn)({ name: 'direccionEnvioId' }),
    __metadata("design:type", despacho_1.Despacho)
], DireccionEnvio.prototype, "despacho", void 0);
exports.DireccionEnvio = DireccionEnvio = __decorate([
    (0, typeorm_1.Entity)({ name: 'DireccionEnvio' })
], DireccionEnvio);
//# sourceMappingURL=direccionEnvio.js.map