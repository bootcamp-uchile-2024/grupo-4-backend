import { forwardRef, Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { PedidoModule } from 'src/pedido/pedido.module';
import { Usuarios } from 'src/orm/entity/usuario';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutenticacionModule } from 'src/autenticacion/autenticacion.module';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService],
  exports: [UsuarioService],
  imports: [forwardRef(() => PedidoModule), TypeOrmModule.forFeature([Usuarios]), AutenticacionModule],
})
export class UsuarioModule {}
