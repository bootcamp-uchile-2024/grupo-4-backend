import { forwardRef, Module } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { PedidoController } from './pedido.controller';
import { UsuarioModule } from 'src/usuario/usuario.module';

@Module({
  controllers: [PedidoController],
  providers: [PedidoService],
  imports: [forwardRef(() =>UsuarioModule)],
  exports: [PedidoService]
})
export class PedidoModule {}
