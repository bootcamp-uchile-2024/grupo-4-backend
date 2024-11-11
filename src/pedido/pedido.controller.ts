import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  Res,
  Query,
  HttpException,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { TipoDespacho } from 'src/pedido/enum/tipoDespacho';

@ApiTags('pedidos')
@Controller('pedido')
export class PedidoController {
  constructor(private readonly pedidoService: PedidoService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Pedido creado exitosamente.' })
  @ApiResponse({ status: 404, description: 'Usuario no existe.' })
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  create(@Body() createPedidoDto: CreatePedidoDto) {
    const pedido = this.pedidoService.create(createPedidoDto);
    if (!pedido) {
      throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
    }
    return pedido;
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Se entregan pedidos encontrados.' })
  @ApiQuery({
    name: 'tipo',
    enum: TipoDespacho,
    required: false,
    description: 'Filtrar por tipo despacho (opcional)',
  })
  findAll(@Query('tipo') tipo: TipoDespacho) {
    return this.pedidoService.findAll(tipo);
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Pedido encontrado.' })
  @ApiResponse({ status: 404, description: 'Pedido no encontrado.' })
  findOne(@Param('id') id: number) {
    const pedido = this.pedidoService.findOne(id);
    if (!pedido) {
      throw new HttpException('Pedido no encontrado', HttpStatus.NOT_FOUND);
    }
    return pedido;
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'Pedido modificado.' })
  @ApiResponse({ status: 404, description: 'Pedido no encontrado.' })
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  update(@Param('id') id: number, @Body() updatePedidoDto: UpdatePedidoDto) {
    const pedido = this.pedidoService.update(id, updatePedidoDto);
    if (!pedido) {
      throw new HttpException('Pedido no encontrado', HttpStatus.NOT_FOUND);
    }
    return { message: 'Pedido actualizado' };
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Pedido eliminado.' })
  @ApiResponse({ status: 404, description: 'Pedido no encontrado.' })
  remove(@Param('id') id: number) {
    const pedido = this.pedidoService.remove(id);
    if (!pedido) {
      throw new HttpException('Pedido no encontrado', HttpStatus.NOT_FOUND);
    }
    return { message: 'Pedido eliminado' };
  }
}
