'use strict';
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
            ? (desc = Object.getOwnPropertyDescriptor(target, key))
            : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
      return Reflect.metadata(k, v);
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.Pedido =
  exports.EstadoPedido =
  exports.TipoBoleta =
  exports.TipoPago =
  exports.TipoDespacho =
    void 0;
const swagger_1 = require('@nestjs/swagger');
const pedido_usuario_dto_1 = require('../../usuario/dto/pedido-usuario.dto');
var TipoDespacho;
(function (TipoDespacho) {
  TipoDespacho['Retiro'] = 'retiro';
  TipoDespacho['Envio'] = 'envio';
})(TipoDespacho || (exports.TipoDespacho = TipoDespacho = {}));
var TipoPago;
(function (TipoPago) {
  TipoPago['Debito'] = 'debito';
  TipoPago['Credito'] = 'Credito';
})(TipoPago || (exports.TipoPago = TipoPago = {}));
var TipoBoleta;
(function (TipoBoleta) {
  TipoBoleta['Boleta'] = 'boleta';
  TipoBoleta['Factura'] = 'factura';
})(TipoBoleta || (exports.TipoBoleta = TipoBoleta = {}));
var EstadoPedido;
(function (EstadoPedido) {
  EstadoPedido['Pendiente'] = 'pendiente';
  EstadoPedido['Enviado'] = 'enviado';
  EstadoPedido['Entregado'] = 'entregado';
})(EstadoPedido || (exports.EstadoPedido = EstadoPedido = {}));
class Pedido {}
exports.Pedido = Pedido;
__decorate(
  [(0, swagger_1.ApiProperty)(), __metadata('design:type', Number)],
  Pedido.prototype,
  'id',
  void 0,
);
__decorate(
  [(0, swagger_1.ApiProperty)(), __metadata('design:type', Date)],
  Pedido.prototype,
  'fecha',
  void 0,
);
__decorate(
  [(0, swagger_1.ApiProperty)(), __metadata('design:type', Number)],
  Pedido.prototype,
  'montoTotal',
  void 0,
);
__decorate(
  [(0, swagger_1.ApiProperty)(), __metadata('design:type', String)],
  Pedido.prototype,
  'tipoDespacho',
  void 0,
);
__decorate(
  [(0, swagger_1.ApiProperty)(), __metadata('design:type', String)],
  Pedido.prototype,
  'tipoPago',
  void 0,
);
__decorate(
  [(0, swagger_1.ApiProperty)(), __metadata('design:type', String)],
  Pedido.prototype,
  'tipoBoleta',
  void 0,
);
__decorate(
  [(0, swagger_1.ApiProperty)(), __metadata('design:type', String)],
  Pedido.prototype,
  'estado',
  void 0,
);
__decorate(
  [
    (0, swagger_1.ApiProperty)(),
    __metadata('design:type', pedido_usuario_dto_1.PedidoUsuarioDto),
  ],
  Pedido.prototype,
  'usuario',
  void 0,
);
//# sourceMappingURL=pedido.entity.js.map
