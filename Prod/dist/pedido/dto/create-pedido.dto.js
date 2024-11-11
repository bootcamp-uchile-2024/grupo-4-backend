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
exports.CreatePedidoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const estadoPedido_1 = require("../enum/estadoPedido");
const tipoBoleta_1 = require("../enum/tipoBoleta");
const tipoDespacho_1 = require("../enum/tipoDespacho");
const tipoPago_1 = require("../enum/tipoPago");
const pedido_usuario_dto_1 = require("../../usuario/dto/pedido-usuario.dto");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class CreatePedidoDto {
}
exports.CreatePedidoDto = CreatePedidoDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Fecha del pedido',
        example: new Date().toISOString(),
    }),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], CreatePedidoDto.prototype, "fecha", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Monto total del pedido', example: 1000 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreatePedidoDto.prototype, "montoTotal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tipo de despacho del pedido',
        example: tipoDespacho_1.TipoDespacho.Retiro,
    }),
    (0, class_validator_1.IsEnum)(tipoDespacho_1.TipoDespacho),
    __metadata("design:type", String)
], CreatePedidoDto.prototype, "tipoDespacho", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tipo de pago del pedido',
        example: tipoPago_1.TipoPago.Debito,
    }),
    (0, class_validator_1.IsEnum)(tipoPago_1.TipoPago),
    __metadata("design:type", String)
], CreatePedidoDto.prototype, "tipoPago", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tipo de boleta del pedido',
        example: tipoBoleta_1.TipoBoleta.Boleta,
    }),
    (0, class_validator_1.IsEnum)(tipoBoleta_1.TipoBoleta),
    __metadata("design:type", String)
], CreatePedidoDto.prototype, "tipoBoleta", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Estado del pedido',
        example: estadoPedido_1.EstadoPedido.Pendiente,
    }),
    (0, class_validator_1.IsEnum)(estadoPedido_1.EstadoPedido),
    __metadata("design:type", String)
], CreatePedidoDto.prototype, "estado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Información del usuario asociado al pedido',
        example: { usuarioId: 1 },
    }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => pedido_usuario_dto_1.PedidoUsuarioDto),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", pedido_usuario_dto_1.PedidoUsuarioDto)
], CreatePedidoDto.prototype, "usuario", void 0);
//# sourceMappingURL=create-pedido.dto.js.map