import { forwardRef, Module } from '@nestjs/common';
import { CarritoDeComprasService } from './carrito-de-compras.service';
import { CarritoDeComprasController } from './carrito-de-compras.controller';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { ProductosModule } from 'src/productos/productos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarritoDeCompras } from 'src/orm/entity/carritoDeCompras';
import { Usuarios } from 'src/orm/entity/usuario';
import { Productos } from 'src/orm/entity/producto';
import { CarritoItem } from 'src/orm/entity/carritoItem';

@Module({
  controllers: [CarritoDeComprasController],
  providers: [CarritoDeComprasService],
  imports:[TypeOrmModule.forFeature([CarritoDeCompras, Usuarios, Productos, CarritoItem]), forwardRef(() => UsuarioModule), forwardRef(() => ProductosModule)],
})
export class CarritoDeComprasModule {}
