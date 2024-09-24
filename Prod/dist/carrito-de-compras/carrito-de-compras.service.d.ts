import { CreateCarritoDeCompraDto } from './dto/create-carrito-de-compra.dto';
import { UpdateCarritoDeCompraDto } from './dto/update-carrito-de-compra.dto';
import { CarritoDeCompra } from './entities/carrito-de-compra.entity';
import { UsuarioService } from 'src/usuario/usuario.service';
import { ProductosService } from 'src/productos/productos.service';
export declare class CarritoDeComprasService {
    private readonly usuarioService;
    private readonly productoService;
    carritoDeCompras: CarritoDeCompra[];
    constructor(usuarioService: UsuarioService, productoService: ProductosService);
    create(createCarritoDeCompraDto: CreateCarritoDeCompraDto): CarritoDeCompra;
    findCarritoByUsuarioId(usuarioId: number): CarritoDeCompra[];
    findOne(id: number): CarritoDeCompra;
    update(id: number, updateCarritoDeCompraDto: UpdateCarritoDeCompraDto): boolean;
    remove(id: number): boolean;
    updateEstado(id: number, estado: number): boolean;
}
