import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { CarritoDeCompra } from 'src/carrito-de-compras/entities/carrito-de-compra.entity';
import { PedidoService } from 'src/pedido/pedido.service';
import { PedidoUsuarioDto } from './dto/pedido-usuario.dto';
import { Usuarios } from 'src/orm/entity/usuario';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioDTO } from './dto/usuario.dto';
import { UsuarioMapper } from './mapper/usuario.mappers';

@Injectable()
export class UsuarioService {
 
  usuarios: Usuario[] = [];

  constructor(
    @InjectRepository(Usuarios)private usuariosRepository: Repository<Usuarios>,
    @Inject(forwardRef(() => PedidoService))
    private readonly pedidoService: PedidoService,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<UsuarioDTO> {
    const usuario = new Usuario();

   
    usuario.nombre = createUsuarioDto.nombre;
    usuario.apellido = createUsuarioDto.apellido;
    usuario.email = createUsuarioDto.email;
    usuario.direccion = createUsuarioDto.direccion;    
    usuario.comuna = createUsuarioDto.comuna;
    usuario.ciudad = createUsuarioDto.ciudad;
    usuario.region = createUsuarioDto.region;
    usuario.telefono = createUsuarioDto.telefono;    
    usuario.constrasenna = createUsuarioDto.contrasenna;
    usuario.rut = createUsuarioDto.rut;
    usuario.pedidos = [];
    usuario.carritoDeCompras = [];

     const usuarioGuradado = await this.usuariosRepository.save(usuario);
    return usuarioGuradado;
  }

  async findAll(): Promise<UsuarioDTO[]> {
    const listadoUsuarios: Usuarios[] = await this.usuariosRepository.find();
    return UsuarioMapper.entityListToDtoList(listadoUsuarios);
  }

  async findOne(rut: string): Promise<UsuarioDTO> {
    const usuario:Usuarios = await this.usuariosRepository.findOneBy({rut});

    return UsuarioMapper.entityToDto(usuario);
  }

  /*update(id: number, updateUsuarioDto: UpdateUsuarioDto): boolean {
    const usuario = await this.usuariosRepository.findOne(id);

    if (!usuario) return false;

    
    
    usuario.direccion = updateUsuarioDto.direccion;    
    usuario.comuna = updateUsuarioDto.comuna;
    usuario.ciudad = updateUsuarioDto.ciudad;
    usuario.region = updateUsuarioDto.region;
    usuario.telefono = updateUsuarioDto.telefono;    
    usuario.constrasenna = updateUsuarioDto.contrasenna;    
    usuario.pedidos = [];
    usuario.carritoDeCompras = [];
    return true;
  }*/

  /*remove(id: number): boolean {
    const usuario = this.findOne(id);

    if (!usuario) return false;

    this.usuarios.forEach((usuario) => {
      if (usuario.id == id) {
        this.usuarios.splice(this.usuarios.indexOf(usuario), 1);
      }
    });

    return true;
  }*/

  /*updateCarrito(usuarioId: number, carrito: CarritoDeCompra): boolean {
    const usuario = this.findOne(usuarioId);

    if (!usuario) return false;

    usuario.carritoDeCompras = carrito;

    return true;
  }*/

  /*deleteCarrito(usuarioId: number): boolean {
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
  }*/
}
