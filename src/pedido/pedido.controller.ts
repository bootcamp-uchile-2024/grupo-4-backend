import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Res, Query } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { TipoDespacho } from './entities/pedido.entity';

@ApiTags('pedidos')
@Controller('pedido')
export class PedidoController {

  private ERROR_USUARIO_NO_ENCONTRADO = {};
  private ERROR_PEDIDO_NO_ENCONTRADO = {};

  constructor(private readonly pedidoService: PedidoService) {

    this.ERROR_USUARIO_NO_ENCONTRADO = {
      status: HttpStatus.NOT_FOUND,
      mensaje: 'Usuario no encontrado'
    };
  
    this.ERROR_PEDIDO_NO_ENCONTRADO = {
      status: HttpStatus.NOT_FOUND,
      mensaje: 'Pedido no encontrado'
    };

  };

  @Post()
  @ApiResponse({ status: 201, description: 'Pedido creado exitosamente.' })
  @ApiResponse({ status: 404, description: 'Usuario no existe.' })
  create(
    @Body() createPedidoDto: CreatePedidoDto,
    @Res() res: Response 

  ) {

    const pedido = this.pedidoService.create(createPedidoDto);

    pedido ?
      res.status(HttpStatus.CREATED).json(pedido) : 
      res.status(HttpStatus.NOT_FOUND).send(
        this.ERROR_USUARIO_NO_ENCONTRADO
      );

  }

  @Get()
  @ApiResponse({ status: 200, description: 'Se entregan pedidos encontrados.' })
  @ApiQuery({ name: 'tipo', enum: TipoDespacho, required: false, description: 'Filtrar por tipo despacho (opcional)' })
  findAll(
    @Query('tipo') tipo: TipoDespacho,
  ) {
    return this.pedidoService.findAll(tipo);
  };

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Pedido encontrado.' })
  @ApiResponse({ status: 404, description: 'Pedido no encontrado.' })
  findOne(
    @Param('id') id: number,
    @Res() res: Response 
  ) {

    const pedido = this.pedidoService.findOne(id);

    pedido ?
      res.status(HttpStatus.OK).json(pedido) : 
      res.status(HttpStatus.NOT_FOUND).send(
        this.ERROR_PEDIDO_NO_ENCONTRADO
      );
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'Pedido modificado.' })
  @ApiResponse({ status: 404, description: 'Pedido no encontrado.' })
  update(
    @Param('id') id: number, 
    @Body() updatePedidoDto: UpdatePedidoDto,
    @Res() res: Response 

  ) {

    const pedido = this.pedidoService.update(id, updatePedidoDto);

    pedido ?
      res.status(HttpStatus.OK).send() : 
      res.status(HttpStatus.NOT_FOUND).send(
        this.ERROR_PEDIDO_NO_ENCONTRADO
      );

  };

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Pedido eliminado.' })
  @ApiResponse({ status: 404, description: 'Pedido no encontrado.' })
  remove(
    @Param('id') id: number,
    @Res() res: Response 
  ) {

    const pedido = this.pedidoService.remove(id);

    pedido ?
      res.status(HttpStatus.OK).send() : 
      res.status(HttpStatus.NOT_FOUND).send(
        this.ERROR_PEDIDO_NO_ENCONTRADO
      );
  };
};
