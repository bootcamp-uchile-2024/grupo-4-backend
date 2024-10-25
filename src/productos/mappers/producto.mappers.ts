import { Producto } from "src/orm/entity/producto";
import { ProductoDTO } from "../dto/producto.dto";



export class ProductoMapper {
    static entityToDto(entity: Producto) : ProductoDTO {
        const dto = new ProductoDTO();
        dto.id = entity.id;
        dto.nombre = entity.nombre;
        dto.descripcion = entity.descripcion;
        dto.precio = entity.precio;
        //dto.categoria = entity.categoria;
        dto.stock = entity.stock;
        dto.imagen = entity.imagen;
        return dto;
    }

    static entityListToDtoList(entityList: Producto[]) : ProductoDTO[] {
        return entityList.map((entity) => this.entityToDto(entity));
    }

}