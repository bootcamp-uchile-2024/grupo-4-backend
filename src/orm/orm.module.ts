import { Module } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './entity/categoria';
import { EstadoDespacho } from './entity/estadoDespacho';
import { PaisOrigen } from './entity/paisOrigen';
import { TipoProducto } from './entity/tipoProducto';
import { TipoUsuario } from './entity/tipoUsuario';
import { PedidoItem } from './entity/pedidoItem';
import { CarritoItem } from './entity/carritoItem';
import { CarritoDeCompras } from './entity/carritoDeCompras';
import { Despacho } from './entity/despacho';
import { Pedido } from './entity/pedido';
import { DireccionEnvio } from './entity/direccionEnvio';
import { Usuarios } from './entity/usuario';
import { Productos } from './entity/producto';
import { Compra } from 'src/compra/entities/compra.entity';

dotenv.config();
console.log(process.env.HOST_DB);
console.log(process.env.MYSQL_CONTAINER_PORT);
console.log(process.env.USER_DB);
console.log(process.env.MYSQL_ROOT_PASSWORD);
console.log(process.env.NAME_DB);


@Module({
    imports: [
        TypeOrmModule.forRoot({
         type: 'mysql',
         host: process.env.HOST_DB ?? 'localhost',
         port: Number(process.env.MYSQL_CONTAINER_PORT) ?? 3306, 
         username: process.env.USER_DB ?? 'root',
         password: process.env.MYSQL_ROOT_PASSWORD ?? 'cafeinados24',
         database:  process.env.NAME_DB ?? 'cafeinados',
        entities: [
            Categoria, 
            EstadoDespacho, 
            PaisOrigen, 
            TipoProducto, 
            TipoUsuario, 
            PedidoItem,
            CarritoItem,
            CarritoDeCompras,
            Despacho,
            Pedido,
            DireccionEnvio,
            Usuarios,
            Productos,
            Compra
             
        ],
    }),
    OrmModule
    ],
})
export class OrmModule {}
