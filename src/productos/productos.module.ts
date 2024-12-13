import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import { Productos } from 'src/orm/entity/producto';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoProducto } from 'src/orm/entity/tipoProducto';
import { Categoria } from 'src/orm/entity/categoria';
import * as multer from 'multer';

@Module({
  imports:[
    TypeOrmModule.forFeature([Productos, TipoProducto, Categoria]),
    MulterModule.register({
      storage: multer.memoryStorage(),
    }),
  ],
  controllers: [ProductosController],
  providers: [ProductosService],
  exports: [ProductosService],
})
export class ProductosModule {}
