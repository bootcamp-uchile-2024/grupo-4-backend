import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
export declare class UsuarioController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    create(createUsuarioDto: CreateUsuarioDto): import("./dto/usuario.dto").UsuarioDTO;
    findAll(): Promise<import("./dto/usuario.dto").UsuarioDTO[]>;
    findOne(id: number): import("./entities/usuario.entity").Usuario;
    update(id: number, updateUsuarioDto: UpdateUsuarioDto): {
        message: string;
    };
    remove(id: number): {
        message: string;
    };
    updateCarrito(id: number, updateCarritoDeCompraDto: any): {
        message: string;
    };
    deleteCarrito(id: number): {
        message: string;
    };
}
