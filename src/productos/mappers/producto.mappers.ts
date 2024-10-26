import { Productos} from "src/orm/entity/producto";
import { ProductoDTO } from "../dto/producto.dto";



export class ProductoMapper {
    static entityToDto(entity: Productos) : ProductoDTO {
        const dto = new ProductoDTO();
        dto.id = entity.id;
        dto.nombre = entity.nombre;
        dto.descripcion = entity.descripcion;
        dto.precio = entity.precio;        
        dto.stock = entity.stock;
        dto.imagen = entity.imagen;
        return dto;
    }

    static entityListToDtoList(entityList: Productos[]) : ProductoDTO[] {
        return entityList.map((entity) => this.entityToDto(entity));
    }

}