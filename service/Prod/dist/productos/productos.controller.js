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
exports.ProductosController = void 0;
const common_1 = require('@nestjs/common');
const productos_service_1 = require('./productos.service');
const create_producto_dto_1 = require('./dto/create-producto.dto');
const update_producto_dto_1 = require('./dto/update-producto.dto');
const swagger_1 = require('@nestjs/swagger');
const producto_entity_1 = require('./entities/producto.entity');
let ProductosController = class ProductosController {
  constructor(productosService) {
    this.productosService = productosService;
  }
  create(createProductoDto) {
    const crearProducto = this.productosService.create(createProductoDto);
    if (!crearProducto) {
      throw new common_1.HttpException(
        'Producto mal creado, ingresalos bien',
        common_1.HttpStatus.BAD_REQUEST,
      );
    }
  }
  findAll(tipo) {
    return this.productosService.findAll(tipo);
  }
  findOne(id) {
    const producto = this.productosService.findOne(id);
    if (!producto) {
      throw new common_1.HttpException(
        'Producto no encontrado',
        common_1.HttpStatus.NOT_FOUND,
      );
    }
    return producto;
  }
  update(id, updateProductoDto) {
    const productoFueActualizado = this.productosService.update(
      id,
      updateProductoDto,
    );
    if (!productoFueActualizado) {
      throw new common_1.HttpException(
        'Producto no encontrado',
        common_1.HttpStatus.NOT_FOUND,
      );
    }
    return { message: 'Producto actualizado' };
  }
  remove(id) {
    const productoFueEliminado = this.productosService.remove(id);
    if (!productoFueEliminado) {
      throw new common_1.HttpException(
        'Producto no encontrado',
        common_1.HttpStatus.NOT_FOUND,
      );
    }
    return { message: 'Producto eliminado' };
  }
};
exports.ProductosController = ProductosController;
__decorate(
  [
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({
      status: 201,
      description: 'Producto creado exitosamente.',
    }),
    (0, swagger_1.ApiResponse)({
      status: 400,
      description: 'Error en los datos enviados',
    }),
    (0, common_1.UsePipes)(
      new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    ),
    __param(0, (0, common_1.Body)()),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [create_producto_dto_1.CreateProductoDto]),
    __metadata('design:returntype', void 0),
  ],
  ProductosController.prototype,
  'create',
  null,
);
__decorate(
  [
    (0, common_1.Get)(),
    (0, swagger_1.ApiQuery)({
      name: 'tipo',
      enum: producto_entity_1.Tipos,
      required: false,
      description: 'Filtrar por tipo de producto (opcional)',
    }),
    __param(0, (0, common_1.Query)('tipo')),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [String]),
    __metadata('design:returntype', void 0),
  ],
  ProductosController.prototype,
  'findAll',
  null,
);
__decorate(
  [
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiResponse)({
      status: 200,
      description: 'Producto encontrado.',
    }),
    (0, swagger_1.ApiResponse)({
      status: 404,
      description: 'Producto no encontrado.',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [Number]),
    __metadata('design:returntype', void 0),
  ],
  ProductosController.prototype,
  'findOne',
  null,
);
__decorate(
  [
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiResponse)({
      status: 200,
      description: 'Producto actualizado.',
    }),
    (0, swagger_1.ApiResponse)({
      status: 404,
      description: 'Producto no encontrado.',
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
      update_producto_dto_1.UpdateProductoDto,
    ]),
    __metadata('design:returntype', void 0),
  ],
  ProductosController.prototype,
  'update',
  null,
);
__decorate(
  [
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiResponse)({
      status: 200,
      description: 'Producto eliminado.',
    }),
    (0, swagger_1.ApiResponse)({
      status: 404,
      description: 'Producto no encontrado.',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [Number]),
    __metadata('design:returntype', void 0),
  ],
  ProductosController.prototype,
  'remove',
  null,
);
exports.ProductosController = ProductosController = __decorate(
  [
    (0, swagger_1.ApiTags)('productos'),
    (0, common_1.Controller)('productos'),
    __metadata('design:paramtypes', [productos_service_1.ProductosService]),
  ],
  ProductosController,
);
//# sourceMappingURL=productos.controller.js.map
