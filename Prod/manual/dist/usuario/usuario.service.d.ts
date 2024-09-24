import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { CarritoDeCompra } from 'src/carrito-de-compras/entities/carrito-de-compra.entity';
import { PedidoService } from 'src/pedido/pedido.service';
import { PedidoUsuarioDto } from './dto/pedido-usuario.dto';
export declare class UsuarioService {
    private readonly pedidoService;
    usuarios: Usuario[];
    constructor(pedidoService: PedidoService);
    create(createUsuarioDto: CreateUsuarioDto): Usuario;
    findAll(): Usuario[];
    findOne(id: number): Usuario;
    update(id: number, updateUsuarioDto: UpdateUsuarioDto): boolean;
    remove(id: number): boolean;
    updateCarrito(usuarioId: number, carrito: CarritoDeCompra): boolean;
    deleteCarrito(usuarioId: number): boolean;
    addPedido(usuarioId: number, pedido: PedidoUsuarioDto): boolean;
}
