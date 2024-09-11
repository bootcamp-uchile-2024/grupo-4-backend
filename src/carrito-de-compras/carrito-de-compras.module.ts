import { forwardRef, Module } from '@nestjs/common';
import { CarritoDeComprasService } from './carrito-de-compras.service';
import { CarritoDeComprasController } from './carrito-de-compras.controller';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { ProductosModule } from 'src/productos/productos.module';

@Module({
  controllers: [CarritoDeComprasController],
  providers: [CarritoDeComprasService],
  imports: [forwardRef(() =>UsuarioModule), forwardRef(() =>ProductosModule)]
})
export class CarritoDeComprasModule {}
