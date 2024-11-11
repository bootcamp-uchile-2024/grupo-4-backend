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
exports.Despacho = void 0;
const typeorm_1 = require("typeorm");
const estadoDespacho_1 = require("./estadoDespacho");
const direccionEnvio_1 = require("./direccionEnvio");
let Despacho = class Despacho {
};
exports.Despacho = Despacho;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], Despacho.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Despacho.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Despacho.prototype, "fechaDespacho", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Despacho.prototype, "fechaEntregaEstimada", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Despacho.prototype, "direccionEnvioId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => estadoDespacho_1.EstadoDespacho),
    (0, typeorm_1.JoinColumn)({ name: 'id_estadoDespacho' }),
    __metadata("design:type", estadoDespacho_1.EstadoDespacho)
], Despacho.prototype, "estadoDespacho", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => direccionEnvio_1.DireccionEnvio, (direccionEnvio) => direccionEnvio.despacho),
    __metadata("design:type", Array)
], Despacho.prototype, "direccionEnvio", void 0);
exports.Despacho = Despacho = __decorate([
    (0, typeorm_1.Entity)({ name: 'Despacho' })
], Despacho);
//# sourceMappingURL=despacho.js.map