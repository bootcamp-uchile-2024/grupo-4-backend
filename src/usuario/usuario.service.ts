import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { CarritoDeCompra } from 'src/carrito-de-compras/entities/carrito-de-compra.entity';
import { PedidoService } from 'src/pedido/pedido.service';
import { PedidoUsuarioDto } from './dto/pedido-usuario.dto';

@Injectable()
export class UsuarioService {
  usuarios: Usuario[] = [];

  constructor(
    @Inject(forwardRef(() => PedidoService))
    private readonly pedidoService: PedidoService,
  ) {}

  create(createUsuarioDto: CreateUsuarioDto): Usuario {
    const usuario = new Usuario();

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
    usuario.carritoDeCompras = new CarritoDeCompra();

    this.usuarios.push(usuario);
    return usuario;
  }

  findAll(): Usuario[] {
    return this.usuarios;
  }

  findOne(id: number): Usuario {
    const usuario = this.usuarios.find((usuario) => usuario.id == id);

    return usuario ? usuario : null;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto): boolean {
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

  remove(id: number): boolean {
    const usuario = this.findOne(id);

    if (!usuario) return false;

    this.usuarios.forEach((usuario) => {
      if (usuario.id == id) {
        this.usuarios.splice(this.usuarios.indexOf(usuario), 1);
      }
    });

    return true;
  }

  updateCarrito(usuarioId: number, carrito: CarritoDeCompra): boolean {
    const usuario = this.findOne(usuarioId);

    if (!usuario) return false;

    usuario.carritoDeCompras = carrito;

    return true;
  }

  deleteCarrito(usuarioId: number): boolean {
    const usuario = this.findOne(usuarioId);

    if (!usuario) return false;

    usuario.carritoDeCompras = null;

    return true;
  }

  addPedido(usuarioId: number, pedido: PedidoUsuarioDto): boolean {
    const usuario = this.findOne(usuarioId);

    if (!usuario) return false;

    usuario.pedidos.push(pedido);

    return true;
  }
}
