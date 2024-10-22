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
exports.CarritoDeComprasService = void 0;
const common_1 = require('@nestjs/common');
const carrito_de_compra_entity_1 = require('./entities/carrito-de-compra.entity');
const usuario_service_1 = require('../usuario/usuario.service');
const usuario_carrito_de_compra_dto_1 = require('./dto/usuario-carrito-de-compra.dto');
const carrito_item_entity_1 = require('./entities/carrito-item.entity');
const productos_service_1 = require('../productos/productos.service');
const carrito_producto_dto_1 = require('../productos/dto/carrito-producto.dto');
let CarritoDeComprasService = class CarritoDeComprasService {
  constructor(usuarioService, productoService) {
    this.usuarioService = usuarioService;
    this.productoService = productoService;
    this.carritoDeCompras = [];
  }
  create(createCarritoDeCompraDto) {
    const usuario = this.usuarioService.findOne(
      createCarritoDeCompraDto.usuario.id,
    );
    if (!usuario) return null;
    const productosId = createCarritoDeCompraDto.items.map(
      (item) => item.producto.productoId,
    );
    console.log('productosId', productosId);
    productosId.forEach((productoId) => {
      if (!this.productoService.findOne(productoId)) return null;
    });
    const carrito = new carrito_de_compra_entity_1.CarritoDeCompra();
    carrito.id = this.carritoDeCompras.length + 1;
    carrito.usuario =
      new usuario_carrito_de_compra_dto_1.UsuarioCarritoDeCompraDto();
    carrito.usuario.id = usuario.id;
    carrito.estadoCarrito = 0;
    const items = [];
    const item = new carrito_item_entity_1.CarritoItem();
    createCarritoDeCompraDto.items.forEach((itemDto, index) => {
      const producto = this.productoService.findOne(
        itemDto.producto.productoId,
      );
      item.id = index + 1;
      item.producto = new carrito_producto_dto_1.CarritoProductoDto();
      item.producto.productoId = itemDto.producto.productoId;
      item.producto.precio = producto.precio;
      item.cantidad = itemDto.cantidad;
      item.carritoDeComprasId = carrito.id;
      items.push(item);
    });
    carrito.items = items;
    this.carritoDeCompras.push(carrito);
    this.usuarioService.updateCarrito(usuario.id, carrito);
    return carrito;
  }
  findCarritoByUsuarioId(usuarioId) {
    const usuario = this.usuarioService.findOne(usuarioId);
    if (!usuario) return null;
    const carrito = this.carritoDeCompras.filter(
      (carrito) => carrito.usuario.id == usuarioId,
    );
    return carrito;
  }
  findOne(id) {
    const carrito = this.carritoDeCompras.find((carrito) => carrito.id == id);
    return carrito ? carrito : null;
  }
  update(id, updateCarritoDeCompraDto) {
    const carrito = this.findOne(id);
    if (!carrito) return false;
    const usuario = this.usuarioService.findOne(
      updateCarritoDeCompraDto.usuario.id,
    );
    if (!usuario) return false;
    carrito.usuario.id = usuario.id;
    const items = [];
    const item = new carrito_item_entity_1.CarritoItem();
    updateCarritoDeCompraDto.items.forEach((itemDto, index) => {
      const producto = this.productoService.findOne(
        itemDto.producto.productoId,
      );
      item.id = index + 1;
      item.producto = new carrito_producto_dto_1.CarritoProductoDto();
      item.producto.productoId = itemDto.producto.productoId;
      item.producto.precio = producto.precio;
      item.cantidad = itemDto.cantidad;
      item.carritoDeComprasId = carrito.id;
      items.push(item);
    });
    carrito.items = items;
    return true;
  }
  remove(id) {
    const carrito = this.findOne(id);
    if (!carrito) return false;
    this.carritoDeCompras.forEach((carrito) => {
      if (carrito.id == id) {
        this.carritoDeCompras.splice(this.carritoDeCompras.indexOf(carrito), 1);
      }
    });
    this.usuarioService.deleteCarrito(carrito.usuario.id);
    return true;
  }
  updateEstado(id, estado) {
    const carrito = this.findOne(id);
    if (!carrito) return false;
    if (estado < 0 || estado > 2) return false;
    carrito.estadoCarrito = estado;
    return true;
  }
};
exports.CarritoDeComprasService = CarritoDeComprasService;
exports.CarritoDeComprasService = CarritoDeComprasService = __decorate(
  [
    (0, common_1.Injectable)(),
    __metadata('design:paramtypes', [
      usuario_service_1.UsuarioService,
      productos_service_1.ProductosService,
    ]),
  ],
  CarritoDeComprasService,
);
//# sourceMappingURL=carrito-de-compras.service.js.map
