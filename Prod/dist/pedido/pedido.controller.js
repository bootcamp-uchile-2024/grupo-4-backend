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
var __param =
  (this && this.__param) ||
  function (paramIndex, decorator) {
    return function (target, key) {
      decorator(target, key, paramIndex);
    };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.PedidoController = void 0;
const common_1 = require('@nestjs/common');
const pedido_service_1 = require('./pedido.service');
const create_pedido_dto_1 = require('./dto/create-pedido.dto');
const update_pedido_dto_1 = require('./dto/update-pedido.dto');
const swagger_1 = require('@nestjs/swagger');
const pedido_entity_1 = require('./entities/pedido.entity');
let PedidoController = class PedidoController {
  constructor(pedidoService) {
    this.pedidoService = pedidoService;
  }
  create(createPedidoDto) {
    const pedido = this.pedidoService.create(createPedidoDto);
    if (!pedido) {
      throw new common_1.HttpException(
        'Usuario no encontrado',
        common_1.HttpStatus.NOT_FOUND,
      );
    }
    return pedido;
  }
  findAll(tipo) {
    return this.pedidoService.findAll(tipo);
  }
  findOne(id) {
    const pedido = this.pedidoService.findOne(id);
    if (!pedido) {
      throw new common_1.HttpException(
        'Pedido no encontrado',
        common_1.HttpStatus.NOT_FOUND,
      );
    }
    return pedido;
  }
  update(id, updatePedidoDto) {
    const pedido = this.pedidoService.update(id, updatePedidoDto);
    if (!pedido) {
      throw new common_1.HttpException(
        'Pedido no encontrado',
        common_1.HttpStatus.NOT_FOUND,
      );
    }
    return { message: 'Pedido actualizado' };
  }
  remove(id) {
    const pedido = this.pedidoService.remove(id);
    if (!pedido) {
      throw new common_1.HttpException(
        'Pedido no encontrado',
        common_1.HttpStatus.NOT_FOUND,
      );
    }
    return { message: 'Pedido eliminado' };
  }
};
exports.PedidoController = PedidoController;
__decorate(
  [
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({
      status: 201,
      description: 'Pedido creado exitosamente.',
    }),
    (0, swagger_1.ApiResponse)({
      status: 404,
      description: 'Usuario no existe.',
    }),
    (0, common_1.UsePipes)(
      new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    ),
    __param(0, (0, common_1.Body)()),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [create_pedido_dto_1.CreatePedidoDto]),
    __metadata('design:returntype', void 0),
  ],
  PedidoController.prototype,
  'create',
  null,
);
__decorate(
  [
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({
      status: 200,
      description: 'Se entregan pedidos encontrados.',
    }),
    (0, swagger_1.ApiQuery)({
      name: 'tipo',
      enum: pedido_entity_1.TipoDespacho,
      required: false,
      description: 'Filtrar por tipo despacho (opcional)',
    }),
    __param(0, (0, common_1.Query)('tipo')),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [String]),
    __metadata('design:returntype', void 0),
  ],
  PedidoController.prototype,
  'findAll',
  null,
);
__decorate(
  [
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiResponse)({
      status: 200,
      description: 'Pedido encontrado.',
    }),
    (0, swagger_1.ApiResponse)({
      status: 404,
      description: 'Pedido no encontrado.',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [Number]),
    __metadata('design:returntype', void 0),
  ],
  PedidoController.prototype,
  'findOne',
  null,
);
__decorate(
  [
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiResponse)({
      status: 200,
      description: 'Pedido modificado.',
    }),
    (0, swagger_1.ApiResponse)({
      status: 404,
      description: 'Pedido no encontrado.',
    }),
    (0, common_1.UsePipes)(
      new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    ),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [
      Number,
      update_pedido_dto_1.UpdatePedidoDto,
    ]),
    __metadata('design:returntype', void 0),
  ],
  PedidoController.prototype,
  'update',
  null,
);
__decorate(
  [
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiResponse)({
      status: 200,
      description: 'Pedido eliminado.',
    }),
    (0, swagger_1.ApiResponse)({
      status: 404,
      description: 'Pedido no encontrado.',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [Number]),
    __metadata('design:returntype', void 0),
  ],
  PedidoController.prototype,
  'remove',
  null,
);
exports.PedidoController = PedidoController = __decorate(
  [
    (0, swagger_1.ApiTags)('pedidos'),
    (0, common_1.Controller)('pedido'),
    __metadata('design:paramtypes', [pedido_service_1.PedidoService]),
  ],
  PedidoController,
);
//# sourceMappingURL=pedido.controller.js.map
