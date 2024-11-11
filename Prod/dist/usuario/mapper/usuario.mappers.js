"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioMapper = void 0;
const usuario_dto_1 = require("../dto/usuario.dto");
class UsuarioMapper {
    static entityToDto(entity) {
        const dto = new usuario_dto_1.UsuarioDTO();
        dto.id = entity.id;
        dto.nombre = entity.nombre;
        dto.apellido = entity.apellido;
        dto.constrasenna = entity.constrasenna;
        dto.rut = entity.rut;
        return dto;
    }
    static entityListToDtoList(entityList) {
        return entityList.map((entity) => this.entityToDto(entity));
    }
}
exports.UsuarioMapper = UsuarioMapper;
//# sourceMappingURL=usuario.mappers.js.map