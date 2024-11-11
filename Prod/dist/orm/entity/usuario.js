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
exports.Usuarios = void 0;
const typeorm_1 = require("typeorm");
const tipoUsuario_1 = require("./tipoUsuario");
const pedido_1 = require("./pedido");
const carritoDeCompras_1 = require("./carritoDeCompras");
const direccionEnvio_1 = require("./direccionEnvio");
let Usuarios = class Usuarios {
};
exports.Usuarios = Usuarios;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], Usuarios.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Usuarios.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Usuarios.prototype, "apellido", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Usuarios.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Usuarios.prototype, "constrasenna", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Usuarios.prototype, "rut", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Usuarios.prototype, "tipoUsuarioId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tipoUsuario_1.TipoUsuario),
    (0, typeorm_1.JoinColumn)({ name: 'tipoUsuarioId' }),
    __metadata("design:type", tipoUsuario_1.TipoUsuario)
], Usuarios.prototype, "tipoUsuario", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => pedido_1.Pedido),
    (0, typeorm_1.JoinColumn)({ name: 'id' }),
    __metadata("design:type", pedido_1.Pedido)
], Usuarios.prototype, "pedido", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => carritoDeCompras_1.CarritoDeCompras),
    (0, typeorm_1.JoinColumn)({ name: 'id' }),
    __metadata("design:type", carritoDeCompras_1.CarritoDeCompras)
], Usuarios.prototype, "carritoDeCompras", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => direccionEnvio_1.DireccionEnvio),
    (0, typeorm_1.JoinColumn)({ name: 'id' }),
    __metadata("design:type", direccionEnvio_1.DireccionEnvio)
], Usuarios.prototype, "direccionEnvio", void 0);
exports.Usuarios = Usuarios = __decorate([
    (0, typeorm_1.Entity)({ name: 'Usuario' })
], Usuarios);
//# sourceMappingURL=usuario.js.map