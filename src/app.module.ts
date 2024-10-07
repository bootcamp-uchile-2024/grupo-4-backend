import { HttpException, HttpStatus, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosModule } from './productos/productos.module';
import { GeneralMiddleware } from './general/general.middleware';
import { UsuarioModule } from './usuario/usuario.module';
import { PedidoModule } from './pedido/pedido.module';
import { CarritoDeComprasModule } from './carrito-de-compras/carrito-de-compras.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ProductosModule, UsuarioModule, PedidoModule, CarritoDeComprasModule,
    ConfigModule.forRoot({
      envFilePath: '.env.develop',//Se configura por defecto el archivo .env.develop para las variables de entorno
      isGlobal: true,
      validate: (config: Record<string, any>) => {
        if (!config.PORT) {
          throw new HttpException('Se requiere un valor a asignar al puerto', HttpStatus.BAD_REQUEST);
        }
        if (config.PORT == "6000") {
          throw new HttpException('El valor del puerto debe ser diferente a 6000', HttpStatus.BAD_REQUEST);
        }
        return {
          PORT: parseInt(config.PORT),          
          AMBIENTE: config.AMBIENTE,          
        };
    
      }
    })],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(GeneralMiddleware) // MIDDLEWARE A APLICAR
      .forRoutes('*'); // RUTAS A LAS QUE APLICA
  }
};
 
