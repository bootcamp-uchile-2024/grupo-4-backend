import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosModule } from './productos/productos.module';
import { GeneralMiddleware } from './general/general.middleware';

@Module({
  imports: [ProductosModule],
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
 
