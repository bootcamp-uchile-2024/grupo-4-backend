import { Usuarios } from "src/orm/entity/usuario";
import { UsuarioDTO } from "../dto/usuario.dto";
export declare class UsuarioMapper {
    static entityToDto(entity: Usuarios): UsuarioDTO;
    static entityListToDtoList(entityList: Usuarios[]): UsuarioDTO[];
}
