import { PedidoService } from './pedido.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { TipoDespacho } from 'src/pedido/enum/tipoDespacho';
export declare class PedidoController {
    private readonly pedidoService;
    constructor(pedidoService: PedidoService);
    create(createPedidoDto: CreatePedidoDto): import("./entities/pedido.entity").Pedido;
    findAll(tipo: TipoDespacho): import("./entities/pedido.entity").Pedido[];
    findOne(id: number): import("./entities/pedido.entity").Pedido;
    update(id: number, updatePedidoDto: UpdatePedidoDto): {
        message: string;
    };
    remove(id: number): {
        message: string;
    };
}
