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
exports.Pedido = void 0;
const typeorm_1 = require("typeorm");
const usuario_1 = require("./usuario");
const pedidoItem_1 = require("./pedidoItem");
let Pedido = class Pedido {
};
exports.Pedido = Pedido;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], Pedido.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Pedido.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Pedido.prototype, "usuarioId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => usuario_1.Usuarios, (usuario) => usuario.pedido),
    __metadata("design:type", Array)
], Pedido.prototype, "usuarios", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => pedidoItem_1.PedidoItem),
    (0, typeorm_1.JoinColumn)({ name: 'id_pedidoItem' }),
    __metadata("design:type", pedidoItem_1.PedidoItem)
], Pedido.prototype, "pedidoItem", void 0);
exports.Pedido = Pedido = __decorate([
    (0, typeorm_1.Entity)({ name: 'Pedido' })
], Pedido);
//# sourceMappingURL=pedido.js.map