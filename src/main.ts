import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { GeneralInterceptor } from './general/general.interceptor';
import { GeneralFilter } from './general/general.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Cafeinados API')
    .setDescription('API para el ecommerce de Cafeinados')
    .setVersion('1.0')
    .addTag('productos')
    .addTag('usuarios')
    .addTag('pedidos')
    .addTag('carrito-de-compras')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalInterceptors(new GeneralInterceptor());
  app.useGlobalFilters(new GeneralFilter());

  await app.listen(3000);
}
bootstrap();
