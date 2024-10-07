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
exports.UsuarioController = void 0;
const common_1 = require('@nestjs/common');
const usuario_service_1 = require('./usuario.service');
const create_usuario_dto_1 = require('./dto/create-usuario.dto');
const update_usuario_dto_1 = require('./dto/update-usuario.dto');
const swagger_1 = require('@nestjs/swagger');
let UsuarioController = class UsuarioController {
  constructor(usuarioService) {
    this.usuarioService = usuarioService;
  }
  create(createUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }
  findAll() {
    return this.usuarioService.findAll();
  }
  findOne(id) {
    const usuario = this.usuarioService.findOne(id);
    if (!usuario) {
      throw new common_1.HttpException(
        'Usuario no encontrado',
        common_1.HttpStatus.NOT_FOUND,
      );
    }
    return usuario;
  }
  update(id, updateUsuarioDto) {
    const usuarioFueModificado = this.usuarioService.update(
      id,
      updateUsuarioDto,
    );
    if (!usuarioFueModificado) {
      throw new common_1.HttpException(
        'Usuario no encontrado',
        common_1.HttpStatus.NOT_FOUND,
      );
    }
    return { message: 'Usuario modificado' };
  }
  remove(id) {
    const usuarioFueEliminado = this.usuarioService.remove(id);
    if (!usuarioFueEliminado) {
      throw new common_1.HttpException(
        'Usuario no encontrado',
        common_1.HttpStatus.NOT_FOUND,
      );
    }
    return { message: 'Usuario eliminado' };
  }
  updateCarrito(id, updateCarritoDeCompraDto) {
    const carritoFueModificado = this.usuarioService.updateCarrito(
      id,
      updateCarritoDeCompraDto,
    );
    if (!carritoFueModificado) {
      throw new common_1.HttpException(
        'Usuario no encontrado',
        common_1.HttpStatus.NOT_FOUND,
      );
    }
    return { message: 'Carrito modificado' };
  }
  deleteCarrito(id) {
    const carritoFueEliminado = this.usuarioService.deleteCarrito(id);
    if (!carritoFueEliminado) {
      throw new common_1.HttpException(
        'Usuario no encontrado',
        common_1.HttpStatus.NOT_FOUND,
      );
    }
    return { message: 'Carrito eliminado' };
  }
};
exports.UsuarioController = UsuarioController;
__decorate(
  [
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({
      status: 201,
      description: 'Usuario creado exitosamente.',
    }),
    (0, common_1.UsePipes)(
      new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    ),
    __param(0, (0, common_1.Body)()),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [create_usuario_dto_1.CreateUsuarioDto]),
    __metadata('design:returntype', void 0),
  ],
  UsuarioController.prototype,
  'create',
  null,
);
__decorate(
  [
    (0, common_1.Get)(),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', []),
    __metadata('design:returntype', void 0),
  ],
  UsuarioController.prototype,
  'findAll',
  null,
);
__decorate(
  [
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiResponse)({
      status: 200,
      description: 'Usuario encontrado.',
    }),
    (0, swagger_1.ApiResponse)({
      status: 404,
      description: 'Usuario no encontrado.',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [Number]),
    __metadata('design:returntype', void 0),
  ],
  UsuarioController.prototype,
  'findOne',
  null,
);
__decorate(
  [
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiResponse)({
      status: 200,
      description: 'Usuario modificado.',
    }),
    (0, swagger_1.ApiResponse)({
      status: 404,
      description: 'Usuario no encontrado.',
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
      update_usuario_dto_1.UpdateUsuarioDto,
    ]),
    __metadata('design:returntype', void 0),
  ],
  UsuarioController.prototype,
  'update',
  null,
);
__decorate(
  [
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiResponse)({
      status: 200,
      description: 'Usuario eliminado.',
    }),
    (0, swagger_1.ApiResponse)({
      status: 404,
      description: 'Usuario no encontrado.',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [Number]),
    __metadata('design:returntype', void 0),
  ],
  UsuarioController.prototype,
  'remove',
  null,
);
__decorate(
  [
    (0, common_1.Patch)(':id/carrito'),
    (0, swagger_1.ApiResponse)({
      status: 200,
      description: 'Carrito modificado.',
    }),
    (0, swagger_1.ApiResponse)({
      status: 404,
      description: 'Usuario no encontrado.',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [Number, Object]),
    __metadata('design:returntype', void 0),
  ],
  UsuarioController.prototype,
  'updateCarrito',
  null,
);
__decorate(
  [
    (0, common_1.Delete)(':id/carrito'),
    (0, swagger_1.ApiResponse)({
      status: 200,
      description: 'Carrito eliminado.',
    }),
    (0, swagger_1.ApiResponse)({
      status: 404,
      description: 'Usuario no encontrado.',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [Number]),
    __metadata('design:returntype', void 0),
  ],
  UsuarioController.prototype,
  'deleteCarrito',
  null,
);
exports.UsuarioController = UsuarioController = __decorate(
  [
    (0, swagger_1.ApiTags)('usuarios'),
    (0, common_1.Controller)('usuario'),
    __metadata('design:paramtypes', [usuario_service_1.UsuarioService]),
  ],
  UsuarioController,
);
//# sourceMappingURL=usuario.controller.js.map
