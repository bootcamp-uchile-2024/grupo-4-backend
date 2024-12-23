import { Module } from '@nestjs/common';
import { CompraService } from './compra.service';
import { CompraController } from './compra.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Compra } from './entities/compra.entity';

@Module({
  controllers: [CompraController],
  providers: [CompraService],
  imports: [TypeOrmModule.forFeature([Compra])],
})
export class CompraModule {}
