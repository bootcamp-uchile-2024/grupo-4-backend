import { CreateCarritoDeCompraDto } from './dto/create-carrito-de-compra.dto';
import { UpdateCarritoDeCompraDto } from './dto/update-carrito-de-compra.dto';
import { CarritoDeCompra } from './entities/carrito-de-compra.entity';
import { UsuarioService } from 'src/usuario/usuario.service';
import { ProductosService } from 'src/productos/productos.service';
import { CarritoDeCompras } from 'src/orm/entity/carritoDeCompras';
import { Repository } from 'typeorm';
import { Usuarios } from 'src/orm/entity/usuario';
import { Productos } from 'src/orm/entity/producto';
import { ResponseDto } from './outputDto/responseDto';
import { CarritoItem } from 'src/orm/entity/carritoItem';
import { CarritoDeComprasDto } from './dto/carrito-de-compras.dto';
export declare class CarritoDeComprasService {
    private CarritoDeComprasRepository;
    private UsuariosRepository;
    private ProductosRepository;
    private CarritoItemRepository;
    private usuarioService;
    private productoService;
    carritoDeCompras: CarritoDeCompra[];
    constructor(CarritoDeComprasRepository: Repository<CarritoDeCompras>, UsuariosRepository: Repository<Usuarios>, ProductosRepository: Repository<Productos>, CarritoItemRepository: Repository<CarritoItem>, usuarioService: UsuarioService, productoService: ProductosService);
    create(createCarritoDeCompraDto: CreateCarritoDeCompraDto): Promise<ResponseDto<CarritoDeComprasDto>>;
    findCarritoByUsuarioId(usuarioId: number): Promise<ResponseDto<CarritoDeComprasDto[]>>;
    findOne(id: number): Promise<ResponseDto<CarritoDeComprasDto>>;
    update(id: number, updateCarritoDeCompraDto: UpdateCarritoDeCompraDto): Promise<ResponseDto<CarritoDeComprasDto>>;
    remove(id: number): Promise<ResponseDto<null>>;
}
