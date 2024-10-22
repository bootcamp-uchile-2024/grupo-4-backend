import { PartialType } from '@nestjs/swagger';
import { CreateCarritoDeCompraDto } from './create-carrito-de-compra.dto';

export class UpdateCarritoDeCompraDto extends PartialType(
  CreateCarritoDeCompraDto,
) {}
