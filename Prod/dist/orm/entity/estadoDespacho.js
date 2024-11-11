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
exports.EstadoDespacho = void 0;
const typeorm_1 = require("typeorm");
const despacho_1 = require("./despacho");
let EstadoDespacho = class EstadoDespacho {
};
exports.EstadoDespacho = EstadoDespacho;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], EstadoDespacho.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EstadoDespacho.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => despacho_1.Despacho, (despacho) => despacho.estadoDespacho),
    __metadata("design:type", Array)
], EstadoDespacho.prototype, "despachos", void 0);
exports.EstadoDespacho = EstadoDespacho = __decorate([
    (0, typeorm_1.Entity)({ name: 'EstadoDespacho' })
], EstadoDespacho);
//# sourceMappingURL=estadoDespacho.js.map