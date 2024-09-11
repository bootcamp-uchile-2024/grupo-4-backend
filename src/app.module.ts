import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosModule } from './productos/productos.module';
import { GeneralMiddleware } from './general/general.middleware';
import { UsuarioModule } from './usuario/usuario.module';
import { PedidoModule } from './pedido/pedido.module';
import { CarritoDeComprasModule } from './carrito-de-compras/carrito-de-compras.module';

@Module({
  imports: [ProductosModule, UsuarioModule, PedidoModule, CarritoDeComprasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
  consumer
  .apply(GeneralMiddleware) // MIDDLEWARE A APLICAR
  .forRoutes('*'); // RUTAS A LAS QUE APLICA
  }
 }
 
