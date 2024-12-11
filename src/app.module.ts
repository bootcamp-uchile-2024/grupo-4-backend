import {HttpException, HttpStatus, MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosModule } from './productos/productos.module';
import { GeneralMiddleware } from './general/general.middleware';
import { UsuarioModule } from './usuario/usuario.module';
import { PedidoModule } from './pedido/pedido.module';
import { CarritoDeComprasModule } from './carrito-de-compras/carrito-de-compras.module';
import { ConfigModule } from '@nestjs/config';
import { OrmModule } from './orm/orm.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AutenticacionModule } from './autenticacion/autenticacion.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: './estaticos',
      serveRoot: '/estaticos',
      
    }),
    ProductosModule,
    UsuarioModule,
    PedidoModule,
    CarritoDeComprasModule,    
    ConfigModule.forRoot({
      envFilePath: '.env', 
      isGlobal: true,
      validate: (config: Record<string, any>) => {
        if (!config.PORT) {
          throw new HttpException(
            'Se requiere un valor a asignar al puerto',
            HttpStatus.BAD_REQUEST,
          );
        }
        if (config.PORT == '6000') {
          throw new HttpException(
            'El valor del puerto debe ser diferente a 6000',
            HttpStatus.BAD_REQUEST,
          );
        }
        return {
          PORT: parseInt(config.PORT),
          AMBIENTE: config.AMBIENTE,
        };
      },
    }),    
    OrmModule, AutenticacionModule,    
    /*ServeStaticModule.forRoot({
      rootPath: __dirname + '/public',
    })*/
  ],
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
