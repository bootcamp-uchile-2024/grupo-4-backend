import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';
import { GeneralInterceptor } from './general/general.interceptor';
import { GeneralFilter } from './general/general.filter';
import { ConfigService } from '@nestjs/config';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import { utilities as nestWinstonModuleUtilities } from 'nest-winston';
import DailyRotateFile from 'winston-daily-rotate-file';

const produccionEnv:string = process.env.NODE_ENV;
const produccion = produccionEnv === 'produccion';

async function bootstrap() {
  // Configurar dotenv para cargar variables de entorno
  dotenv.config({ path: '.env' });

  // Crear la aplicación NestJS
  const app = await NestFactory.create(AppModule);

  // Configuración del logger utilizando Winston
  const logger = WinstonModule.createLogger({
    transports: [
      new winston.transports.Console({
        level: process.env.LOG_LEVEL ?? 'verbose',
        format: winston.format.combine(
          nestWinstonModuleUtilities.format.nestLike('APP', {
            colors: true,
            prettyPrint: true,
          }),
          winston.format.colorize({
            message: true,
            level: true,
            colors: {
              info: 'green',
              error: 'red',
              warn: 'yellow',
              debug: 'blue',
              verbose: 'cyan',
              silly: 'magenta',
            },
            all: true,
          }),
          winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS' }),
          winston.format.printf(({ timestamp, level, message }) => {
            return `${timestamp} [${level}]  ${message}`;
          })
        ),
      }),
      ...(
        produccion
          ? [
              new DailyRotateFile({
                level: 'info',
                datePattern: 'YYYY-MM-DD',
                filename: 'logs/%DATE%-nest.log',
                maxFiles: '14d', // Mantener logs de 14 días
              }),
            ]
          : []
      ),
    ],
  });

  // Configuración de variables de entorno
  const configService: ConfigService = app.get(ConfigService);
  const puerto: number = configService.get<number>('PORT');

  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('Tostado Perfecto - API')
    .setDescription(
      'API de Cafeinados, donde podras realizar pedidos de productos de café de especialidad, ver el estado de tus pedidos y gestionar tu carrito de compras'
    )
    .setVersion('3.0')
    .addTag('productos')
    .addTag('usuarios')
    .addTag('pedidos')
    .addTag('carrito-de-compras')
    .build();

  console.log('PORT:', configService.get('PORT'));
  console.log('Ambiente:', configService.get('AMBIENTE'));

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Configuración global de la aplicación
  app.useGlobalInterceptors(new GeneralInterceptor());
  app.useGlobalFilters(new GeneralFilter());
  app.enableCors(); // Habilitar CORS para permitir acceso desde el frontend

  // Iniciar la aplicación
  await app.listen(puerto);
}

bootstrap();