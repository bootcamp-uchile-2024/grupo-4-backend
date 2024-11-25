import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import {TipoDespacho } from 'src/pedido/enum/tipoDespacho';
import { UsuarioService } from 'src/usuario/usuario.service';
import { PedidoUsuarioDto } from 'src/usuario/dto/pedido-usuario.dto';
import { Pedido } from './entities/pedido.entity';

@Injectable()
export class PedidoService {
  pedidos: Pedido[] = [];

  constructor(
    @Inject(forwardRef(() => UsuarioService))
    private readonly usuarioService: UsuarioService,
  ) {}

  /*create(createPedidoDto: CreatePedidoDto): Pedido {
    const usuario = this.usuarioService.findOne(
      createPedidoDto.usuario.usuarioId,
    );

    if (!usuario) return null;

    const pedido = new Pedido();

    pedido.id = this.pedidos.length + 1;
    pedido.fecha = createPedidoDto.fecha;
    pedido.montoTotal = createPedidoDto.montoTotal;
    pedido.tipoDespacho = createPedidoDto.tipoDespacho;
    pedido.tipoPago = createPedidoDto.tipoPago;
    pedido.tipoBoleta = createPedidoDto.tipoBoleta;
    pedido.estado = createPedidoDto.estado;

    const pedidoUsuario = new PedidoUsuarioDto();

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

    const usuarioPedido = new PedidoUsuarioDto();
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

    //Añade pedido al usuario
    this.usuarioService.addPedido(usuario.id, pedido.usuario);

    return pedido;
  }*/

  findAll(tipo: TipoDespacho): Pedido[] {
    if (tipo !== undefined) {
      return this.pedidos.filter((pedido) => pedido.tipoDespacho == tipo);
    }

    return this.pedidos;
  }

  findOne(id: number): Pedido {
    const pedido = this.pedidos.find((item) => item.id == id);

    return pedido ? pedido : null;
  }

  update(id: number, updatePedidoDto: UpdatePedidoDto): boolean {
    const pedido = this.findOne(id);

    if (!pedido) return false;

    pedido.fecha = updatePedidoDto.fecha;
    pedido.montoTotal = updatePedidoDto.montoTotal;
    pedido.tipoDespacho = updatePedidoDto.tipoDespacho;
    pedido.tipoPago = updatePedidoDto.tipoPago;
    pedido.tipoBoleta = updatePedidoDto.tipoBoleta;
    pedido.estado = updatePedidoDto.estado;

    return true;
  }

  remove(id: number): boolean {
    const pedido = this.findOne(id);

    if (!pedido) return false;

    this.pedidos = this.pedidos.filter((item) => item.id != id);

    return true;
  }
}
