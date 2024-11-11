"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoMapper = void 0;
const producto_dto_1 = require("../dto/producto.dto");
class ProductoMapper {
    static entityToDto(entity) {
        const dto = new producto_dto_1.ProductoDTO();
        dto.id = entity.id;
        dto.nombre = entity.nombre;
        dto.descripcion = entity.descripcion;
        dto.precio = entity.precio;
        dto.stock = entity.stock;
        dto.imagen = entity.imagen;
        return dto;
    }
    static entityListToDtoList(entityList) {
        return entityList.map((entity) => this.entityToDto(entity));
    }
}
exports.ProductoMapper = ProductoMapper;
//# sourceMappingURL=producto.mappers.js.map