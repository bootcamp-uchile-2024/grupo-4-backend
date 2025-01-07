import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { PedidoService } from 'src/pedido/pedido.service';
import { Usuarios } from 'src/orm/entity/usuario';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioDTO } from './dto/usuario.dto';
import { UsuarioMapper } from './mapper/usuario.mappers';
import { BadRequestException } from '@nestjs/common/exceptions';
import { CreateUsuarioRegisterDto } from './dto/create-usuario-register.dto';

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
    usuario.tipoUsuarioId = createUsuarioDto.tipoUsuarioId;  
    usuario.constrasenna = createUsuarioDto.contrasenna; 
   
      // Hashear la contraseña antes de guardarla
    /*const salt = await bcrypt.genSalt(10);
    console.log('contrasenna antes: ', usuario.constrasenna);
    usuario.constrasenna = await bcrypt.hash(createUsuarioDto.contrasenna, salt);
    console.log('contrasenna despues: ', usuario.constrasenna);*/

    usuario.rut = createUsuarioDto.rut;
    usuario.pedidos = [];
    usuario.carritoDeCompras = [];

    const usuarioGuradado = await this.usuariosRepository.save(usuario);
    return usuarioGuradado;
  }

  async createUserRegister(dto: CreateUsuarioRegisterDto): Promise<UsuarioDTO> {
    const nuevoUsuario = new Usuario();

    // Asignamos campos con la data que viene en el dto
    nuevoUsuario.nombre = dto.nombre;
    nuevoUsuario.apellido = dto.apellido;
    nuevoUsuario.direccion = dto.direccion;
    nuevoUsuario.email = dto.correo;
    nuevoUsuario.constrasenna = dto.contrasenna;
    nuevoUsuario.rut = dto.rut;
    nuevoUsuario.tipoUsuarioId = 2; // 2 = usuario normal
    nuevoUsuario.pedidos = [];
    nuevoUsuario.carritoDeCompras = [];

    const usuarioGuardado = await this.usuariosRepository.save(nuevoUsuario);

    return UsuarioMapper.entityToDto(usuarioGuardado);
  }


  async findAll(): Promise<UsuarioDTO[]> {
    const listadoUsuarios: Usuarios[] = await this.usuariosRepository.find();
    return UsuarioMapper.entityListToDtoList(listadoUsuarios);
  }

  async findOne(rut: string, req:any): Promise<UsuarioDTO> {
   
    if(req.user.rut != rut && req.user.tipoUsuarioId != 1){
      throw new BadRequestException('No tienes permisos para ver este usuario');
    }
    const usuario:Usuarios = await this.usuariosRepository.findOneBy({rut});

    return UsuarioMapper.entityToDto(usuario);
  }

  async findByEmail(email: string): Promise<UsuarioDTO> {
    const usuario: Usuarios = await this.usuariosRepository.findOne({ where: { email } });

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
