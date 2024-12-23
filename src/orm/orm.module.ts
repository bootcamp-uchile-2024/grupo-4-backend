import { Module } from '@nestjs/common';
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

@Module({
    imports: [
        TypeOrmModule.forRoot({
         type: 'mysql',
         host: 'bd-server',
         port: 3306,
         username: 'root',
         password: 'cafeinados24',
         database: 'cafeinados',
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
