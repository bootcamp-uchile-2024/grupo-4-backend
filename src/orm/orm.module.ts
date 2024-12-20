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
dotenv.config();
console.log(process.env.NAME_DB);
console.log(process.env.HOST_DB);
console.log(process.env.DB_PORT);
console.log(process.env.USER_DB);
console.log(process.env.NODE_APP_PORT);
console.log(process.env.AMBIENTE);

@Module({
    imports: [
        TypeOrmModule.forRoot({
         type: 'mysql',
         host: 'localhost',//process.env.DB_HOST || 'localhost',
         port: 3700, //.env.DB_PORT || 3306,
         username: 'root',//.env.USER_DB || 'root',
         password: 'cafeinados24',//process.env.MYSQL_ROOT_PASSWORD,
         database:  'cafeinados',//process.env.NAME_DB,
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
        Productos
             
         ],
    }),
    OrmModule
    ],
})
export class OrmModule {}
