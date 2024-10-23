import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './entity/categoria';
import { EstadoDespacho } from './entity/estadoDespacho';
import { EstadoPedido } from 'src/pedido/entities/pedido.entity';
import { PaisOrigen } from './entity/paisOrigen';
import { TipoProducto } from './entity/tipoProducto';
import { TipoUsuario } from './entity/tipoUsuario';
import { PedidoItem } from './entity/pedidoItem';

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
        PedidoItem     
         ],
    }),
    OrmModule
    ],
})
export class OrmModule {}
