import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, HttpException } from '@nestjs/common';
import { CarritoDeComprasService } from './carrito-de-compras.service';
import { CreateCarritoDeCompraDto } from './dto/create-carrito-de-compra.dto';
import { UpdateCarritoDeCompraDto } from './dto/update-carrito-de-compra.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

@ApiTags('carrito-de-compras')
@Controller('carrito-de-compras')
export class CarritoDeComprasController {

  constructor(private readonly carritoDeComprasService: CarritoDeComprasService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Carrito creado exitosamente.' })
  @ApiResponse({ status: 500, description: 'Usuario o producto no existe.' })
  create(@Body() createCarritoDeCompraDto: CreateCarritoDeCompraDto) {
    const carrito = this.carritoDeComprasService.create(createCarritoDeCompraDto);
    if (!carrito) {
      throw new HttpException('Usuario o producto no existe', HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return carrito;
  }

  @Get('/usuario/:id')
  @ApiResponse({ status: 200, description: 'Carrito encontrado.' })
  @ApiResponse({ status: 404, description: 'Usuario no encontrado.' })
  findCarritoByUser(@Param('id') id: number) {
    const carrito = this.carritoDeComprasService.findCarritoByUsuarioId(id);
    if (!carrito) {
      throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
    }
    return carrito;
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Carrito encontrado.' })
  @ApiResponse({ status: 404, description: 'Carrito no encontrado.' })
  findOne(@Param('id') id: number) {
    const carrito = this.carritoDeComprasService.findOne(id);
    if (!carrito) {
      throw new HttpException('Carrito no encontrado', HttpStatus.NOT_FOUND);
    }
    return carrito;
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'El carrito fue modificado con éxito.' })
  @ApiResponse({ status: 500, description: 'Usuario o producto no existe.' })
  update(@Param('id') id: number, @Body() updateCarritoDeCompraDto: UpdateCarritoDeCompraDto) {
    const carritoFueModificado = this.carritoDeComprasService.update(id, updateCarritoDeCompraDto);
    if (!carritoFueModificado) {
      throw new HttpException('El carrito no fue modificado', HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return { message: 'El carrito fue modificado con éxito' };
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'El carrito fue eliminado con éxito.' })
  @ApiResponse({ status: 404, description: 'Carrito no encontrado.' })
  remove(@Param('id') id: number) {
    const carritoFueEliminado = this.carritoDeComprasService.remove(id);
    if (!carritoFueEliminado) {
      throw new HttpException('Carrito no encontrado', HttpStatus.NOT_FOUND);
    }
    return { message: 'El carrito fue eliminado con éxito' };
  }

  @Patch(':id/estado')
  @ApiResponse({ status: 200, description: 'El estado del carrito fue modificado con éxito.' })
  @ApiResponse({ status: 404, description: 'Carrito no encontrado.' })
  updateEstado(@Param('id') id: number, @Body() estadoCarrito: number) {
    const carritoFueModificado = this.carritoDeComprasService.updateEstado(id, estadoCarrito);
    if (!carritoFueModificado) {
      throw new HttpException('El carrito no fue modificado', HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return { message: 'El estado del carrito fue modificado con éxito' };
  }
}