import { Usuarios } from "src/orm/entity/usuario";
import { UsuarioDTO } from "../dto/usuario.dto";


export class UsuarioMapper {
    static entityToDto(entity: Usuarios) : UsuarioDTO {
        const dto = new UsuarioDTO();
        dto.id = entity.id;
        dto.nombre = entity.nombre;
        dto.apellido = entity.apellido;
        dto.email = entity.email;
        dto.constrasenna = entity.constrasenna;
        dto.rut = entity.rut; 
        dto.tipoUsuarioId = entity.tipoUsuarioId;       
        return dto;
    }

    static entityListToDtoList(entityList: Usuarios[]) : UsuarioDTO[] {
        return entityList.map((entity) => this.entityToDto(entity));
    }

}