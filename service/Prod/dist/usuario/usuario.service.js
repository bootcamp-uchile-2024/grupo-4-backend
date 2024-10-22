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
exports.UsuarioService = void 0;
const common_1 = require('@nestjs/common');
const usuario_entity_1 = require('./entities/usuario.entity');
const carrito_de_compra_entity_1 = require('../carrito-de-compras/entities/carrito-de-compra.entity');
const pedido_service_1 = require('../pedido/pedido.service');
let UsuarioService = class UsuarioService {
  constructor(pedidoService) {
    this.pedidoService = pedidoService;
    this.usuarios = [];
  }
  create(createUsuarioDto) {
    const usuario = new usuario_entity_1.Usuario();
    usuario.id = this.usuarios.length + 1;
    usuario.nombre = createUsuarioDto.nombre;
    usuario.apellido = createUsuarioDto.apellido;
    usuario.direccion = createUsuarioDto.direccion;
    usuario.comuna = createUsuarioDto.comuna;
    usuario.ciudad = createUsuarioDto.ciudad;
    usuario.region = createUsuarioDto.region;
    usuario.telefono = createUsuarioDto.telefono;
    usuario.correo = createUsuarioDto.correo;
    usuario.rut = createUsuarioDto.rut;
    usuario.pedidos = [];
    usuario.carritoDeCompras = new carrito_de_compra_entity_1.CarritoDeCompra();
    this.usuarios.push(usuario);
    return usuario;
  }
  findAll() {
    return this.usuarios;
  }
  findOne(id) {
    const usuario = this.usuarios.find((usuario) => usuario.id == id);
    return usuario ? usuario : null;
  }
  update(id, updateUsuarioDto) {
    const usuario = this.findOne(id);
    if (!usuario) return false;
    usuario.direccion = updateUsuarioDto.direccion;
    usuario.comuna = updateUsuarioDto.comuna;
    usuario.ciudad = updateUsuarioDto.ciudad;
    usuario.region = updateUsuarioDto.region;
    usuario.telefono = updateUsuarioDto.telefono;
    usuario.correo = updateUsuarioDto.correo;
    usuario.contrasenna = updateUsuarioDto.contrasenna;
    return true;
  }
  remove(id) {
    const usuario = this.findOne(id);
    if (!usuario) return false;
    this.usuarios.forEach((usuario) => {
      if (usuario.id == id) {
        this.usuarios.splice(this.usuarios.indexOf(usuario), 1);
      }
    });
    return true;
  }
  updateCarrito(usuarioId, carrito) {
    const usuario = this.findOne(usuarioId);
    if (!usuario) return false;
    usuario.carritoDeCompras = carrito;
    return true;
  }
  deleteCarrito(usuarioId) {
    const usuario = this.findOne(usuarioId);
    if (!usuario) return false;
    usuario.carritoDeCompras = null;
    return true;
  }
  addPedido(usuarioId, pedido) {
    const usuario = this.findOne(usuarioId);
    if (!usuario) return false;
    usuario.pedidos.push(pedido);
    return true;
  }
};
exports.UsuarioService = UsuarioService;
exports.UsuarioService = UsuarioService = __decorate(
  [
    (0, common_1.Injectable)(),
    __param(
      0,
      (0, common_1.Inject)(
        (0, common_1.forwardRef)(() => pedido_service_1.PedidoService),
      ),
    ),
    __metadata('design:paramtypes', [pedido_service_1.PedidoService]),
  ],
  UsuarioService,
);
//# sourceMappingURL=usuario.service.js.map
