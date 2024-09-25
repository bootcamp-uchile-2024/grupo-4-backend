import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { GeneralInterceptor } from './general/general.interceptor';
import { GeneralFilter } from './general/general.filter';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService: ConfigService = app.get(ConfigService);//Configuracion de variables de entorno
  const puerto:number = configService.get<number>('PORT');//Asignacion del puerto segun la variable de entorno
  const descripcion:string = configService.get<string>('npm_package_description');//Asignacion de la descripcion segun la variable de entorno
<<<<<<< HEAD
  const autor:string = configService.get<string>('npm_package_author');//Asignacion del autor segun la variable de entorno
  console.log('Descripcion:', descripcion);//Impresion de la variable de entorno
  console.log('Author:', autor);
=======
  console.log('Descripcion:', descripcion);//Impresion de la variable de entorno
>>>>>>> 71655fa69296a533abe7733fc4caf3baf1f2ca1e

  const config = new DocumentBuilder()
    .setTitle('Cafeinados API')
    .setDescription(descripcion)
    .setVersion('1.0')
    .addTag('productos')
    .addTag('usuarios')
    .addTag('pedidos')
    .addTag('carrito-de-compras')
    .build();
    console.log('PORT:', configService.get('PORT'));//Impresion de la variable de entorno
    console.log('Ambiente:', configService.get('AMBIENTE'));//Impresion de la variable de entorno

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalInterceptors(new GeneralInterceptor());
  app.useGlobalFilters(new GeneralFilter());

  await app.listen(puerto);
}
bootstrap();
