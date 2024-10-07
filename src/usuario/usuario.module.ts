import { forwardRef, Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { PedidoModule } from 'src/pedido/pedido.module';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService],
  exports: [UsuarioService],
  imports: [forwardRef(() => PedidoModule)],
})
export class UsuarioModule {}
