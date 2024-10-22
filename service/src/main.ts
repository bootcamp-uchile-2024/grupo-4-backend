import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { GeneralInterceptor } from './general/general.interceptor';
import { GeneralFilter } from './general/general.filter';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService: ConfigService = app.get(ConfigService); //Configuracion de variables de entorno
  const puerto: number = configService.get<number>('PORT'); //Asignacion del puerto segun la variable de entorno

  const config = new DocumentBuilder()
    .setTitle('Tostado Perfecto - API')
    .setDescription(
      'API de Cafeinados, donde podras realizar pedidos de productos de café de especialidad, ver el estado de tus pedidos y gestionar tu carrito de compras',
    )
    .setVersion('1.0')
    .addTag('productos')
    .addTag('usuarios')
    .addTag('pedidos')
    .addTag('carrito-de-compras')
    .build();
  console.log('PORT:', configService.get('PORT')); //Impresion de la variable de entorno
  console.log('Ambiente:', configService.get('AMBIENTE')); //Impresion de la variable de entorno

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalInterceptors(new GeneralInterceptor());
  app.useGlobalFilters(new GeneralFilter());

  await app.listen(puerto);
}
bootstrap();
