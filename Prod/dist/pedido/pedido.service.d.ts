import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { TipoDespacho } from 'src/pedido/enum/tipoDespacho';
import { UsuarioService } from 'src/usuario/usuario.service';
import { Pedido } from './entities/pedido.entity';
export declare class PedidoService {
    private readonly usuarioService;
    pedidos: Pedido[];
    constructor(usuarioService: UsuarioService);
    create(createPedidoDto: CreatePedidoDto): Pedido;
    findAll(tipo: TipoDespacho): Pedido[];
    findOne(id: number): Pedido;
    update(id: number, updatePedidoDto: UpdatePedidoDto): boolean;
    remove(id: number): boolean;
}
