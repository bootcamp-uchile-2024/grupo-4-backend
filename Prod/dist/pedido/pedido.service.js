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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoService = void 0;
const common_1 = require("@nestjs/common");
const pedido_entity_1 = require("./entities/pedido.entity");
const usuario_service_1 = require("../usuario/usuario.service");
const pedido_usuario_dto_1 = require("../usuario/dto/pedido-usuario.dto");
let PedidoService = class PedidoService {
    constructor(usuarioService) {
        this.usuarioService = usuarioService;
        this.pedidos = [];
    }
    create(createPedidoDto) {
        const usuario = this.usuarioService.findOne(createPedidoDto.usuario.usuarioId);
        if (!usuario)
            return null;
        const pedido = new pedido_entity_1.Pedido();
        pedido.id = this.pedidos.length + 1;
        pedido.fecha = createPedidoDto.fecha;
        pedido.montoTotal = createPedidoDto.montoTotal;
        pedido.tipoDespacho = createPedidoDto.tipoDespacho;
        pedido.tipoPago = createPedidoDto.tipoPago;
        pedido.tipoBoleta = createPedidoDto.tipoBoleta;
        pedido.estado = createPedidoDto.estado;
        const pedidoUsuario = new pedido_usuario_dto_1.PedidoUsuarioDto();
        pedidoUsuario.usuarioId = usuario.id;
        pedidoUsuario.nombre = usuario.nombre;
        pedidoUsuario.apellido = usuario.apellido;
        pedidoUsuario.direccion = usuario.direccion;
        pedidoUsuario.comuna = usuario.comuna;
        pedidoUsuario.ciudad = usuario.ciudad;
        pedidoUsuario.region = usuario.region;
        pedidoUsuario.telefono = usuario.telefono;
        pedidoUsuario.correo = usuario.correo;
        pedidoUsuario.rut = usuario.rut;
        pedidoUsuario.pedidoId = pedido.id;
        const usuarioPedido = new pedido_usuario_dto_1.PedidoUsuarioDto();
        usuarioPedido.usuarioId = usuario.id;
        usuarioPedido.nombre = usuario.nombre;
        usuarioPedido.apellido = usuario.apellido;
        usuarioPedido.direccion = usuario.direccion;
        usuarioPedido.comuna = usuario.comuna;
        usuarioPedido.ciudad = usuario.ciudad;
        usuarioPedido.region = usuario.region;
        usuarioPedido.telefono = usuario.telefono;
        usuarioPedido.correo = usuario.correo;
        usuarioPedido.rut = usuario.rut;
        usuarioPedido.pedidoId = pedidoUsuario.pedidoId;
        pedido.usuario = usuarioPedido;
        this.pedidos.push(pedido);
        this.usuarioService.addPedido(usuario.id, pedido.usuario);
        return pedido;
    }
    ;
    findAll(tipo) {
        if (tipo !== undefined) {
            return this.pedidos.filter(pedido => pedido.tipoDespacho == tipo);
        }
        ;
        return this.pedidos;
    }
    findOne(id) {
        const pedido = this.pedidos.find(item => item.id == id);
        return pedido ? pedido : null;
    }
    ;
    update(id, updatePedidoDto) {
        const pedido = this.findOne(id);
        if (!pedido)
            return false;
        pedido.fecha = updatePedidoDto.fecha;
        pedido.montoTotal = updatePedidoDto.montoTotal;
        pedido.tipoDespacho = updatePedidoDto.tipoDespacho;
        pedido.tipoPago = updatePedidoDto.tipoPago;
        pedido.tipoBoleta = updatePedidoDto.tipoBoleta;
        pedido.estado = updatePedidoDto.estado;
        return true;
    }
    ;
    remove(id) {
        const pedido = this.findOne(id);
        if (!pedido)
            return false;
        this.pedidos = this.pedidos.filter(item => item.id != id);
        return true;
    }
    ;
};
exports.PedidoService = PedidoService;
exports.PedidoService = PedidoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)((0, common_1.forwardRef)(() => usuario_service_1.UsuarioService))),
    __metadata("design:paramtypes", [usuario_service_1.UsuarioService])
], PedidoService);
//# sourceMappingURL=pedido.service.js.map