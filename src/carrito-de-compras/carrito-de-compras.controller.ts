import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { CarritoDeComprasService } from './carrito-de-compras.service';
import { CreateCarritoDeCompraDto } from './dto/create-carrito-de-compra.dto';
import { UpdateCarritoDeCompraDto } from './dto/update-carrito-de-compra.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

@ApiTags('carrito-de-compras')
@Controller('carrito-de-compras')
export class CarritoDeComprasController {

  private ERROR_USUARIO_NO_ENCONTRADO = {};
  private ERROR_CARRITO_NO_ENCONTRADO = {};
  private ERROR_CARRITO_NO_MODIFICADO = {};

  constructor(private readonly carritoDeComprasService: CarritoDeComprasService) {

    this.ERROR_USUARIO_NO_ENCONTRADO = {
      status: HttpStatus.NOT_FOUND,
      mensaje: 'Usuario no encontrado'
    };

    this.ERROR_CARRITO_NO_ENCONTRADO = {
      status: HttpStatus.NOT_FOUND,
      mensaje: 'Carrito no encontrado'
    };

    this.ERROR_CARRITO_NO_MODIFICADO = {
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      mensaje: 'El carrito no fue modificado'
    };

  };

  @Post()
  @ApiResponse({ status: 201, description: 'Carrito creado exitosamente.' })
  @ApiResponse({ status: 500, description: 'Usuario o producto no existe.' })
  create(
    @Body() createCarritoDeCompraDto: CreateCarritoDeCompraDto
  ) {
    return this.carritoDeComprasService.create(createCarritoDeCompraDto);
  };

  @Get('/usuario/:id')
  @ApiResponse({ status: 200, description: 'Carrito encontrado.' })
  @ApiResponse({ status: 404, description: 'Usuario no encontrado.' })
  findCarritoByUser(
    @Param('id') id: number,
    @Res() res: Response 
  ) {

    const carrito = this.carritoDeComprasService.findCarritoByUsuarioId(id);

    carrito ?
      res.status(HttpStatus.OK).json(carrito) : 
      res.status(HttpStatus.NOT_FOUND).send(
        this.ERROR_USUARIO_NO_ENCONTRADO
      );
  };

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Carrito encontrado.' })
  @ApiResponse({ status: 404, description: 'Carrito no encontrado.' })
  findOne(
    @Param('id') id: number,
    @Res() res: Response 
  ) {
    
    const carrito = this.carritoDeComprasService.findOne(id);
    
    carrito ?
      res.status(HttpStatus.OK).json(carrito) : 
      res.status(HttpStatus.NOT_FOUND).send(
        this.ERROR_CARRITO_NO_ENCONTRADO
      );

  };

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'El carrito fue modificado con éxito.' })
  @ApiResponse({ status: 500, description: 'Usuario o producto no existe.' })
  update(
    @Param('id') id: number, 
    @Body() updateCarritoDeCompraDto: UpdateCarritoDeCompraDto,
    @Res() res: Response 
  ) {
    
    const carritoFueModificado = this.carritoDeComprasService.update(
      id, 
      updateCarritoDeCompraDto
    );

    carritoFueModificado ?
      res.status(HttpStatus.OK).send() :
      res.status(HttpStatus.NOT_FOUND).send(
        this.ERROR_CARRITO_NO_MODIFICADO
      );

  };

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'El carrito fue eliminado con éxito.' })
  @ApiResponse({ status: 404, description: 'Carrito no encontrado.' })
  remove(
    @Param('id') id: number,
    @Res() res: Response 
  ) {
    
    const carritoFueEliminado = this.carritoDeComprasService.remove(id);

    carritoFueEliminado ?
      res.status(HttpStatus.OK).send() :
      res.status(HttpStatus.NOT_FOUND).send(
        this.ERROR_CARRITO_NO_ENCONTRADO
      );

  };

  @Patch(':id/estado')
  @ApiResponse({ status: 200, description: 'El estado del carrito fue modificado con éxito.' })
  @ApiResponse({ status: 404, description: 'Carrito no encontrado.' })
  updateEstado(
    @Param('id') id: number, 
    @Body() estadoCarrito: number,
    @Res() res: Response 
  ) {
    
    const carritoFueModificado = this.carritoDeComprasService.updateEstado(
      id, 
      estadoCarrito
    );

    carritoFueModificado ?
      res.status(HttpStatus.OK).send() :
      res.status(HttpStatus.NOT_FOUND).send(
        this.ERROR_CARRITO_NO_MODIFICADO
      );

  };
}
