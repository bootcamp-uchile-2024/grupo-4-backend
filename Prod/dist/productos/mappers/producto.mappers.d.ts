import { Productos } from "src/orm/entity/producto";
import { ProductoDTO } from "../dto/producto.dto";
export declare class ProductoMapper {
    static entityToDto(entity: Productos): ProductoDTO;
    static entityListToDtoList(entityList: Productos[]): ProductoDTO[];
}
