import { Controller, Get, Post, Body, Patch, Param, Delete, Query, HttpStatus, Res } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Tipos } from './entities/producto.entity';
import { Response } from 'express';


@ApiTags('productos')
@Controller('productos')
export class ProductosController {

  private ERROR_PRODUCTO_NO_ENCONTRADO = {};

  constructor(private readonly productosService: ProductosService) {
    this.ERROR_PRODUCTO_NO_ENCONTRADO = {
      status: HttpStatus.NOT_FOUND,
      mensaje: 'Producto no encontrado'
    };
  };

  @Post()
  @ApiResponse({ status: 201, description: 'Producto creado exitosamente.' })
  create(@Body() createProductoDto: CreateProductoDto) {
    return this.productosService.create(createProductoDto);
  };

  @Get()
  @ApiQuery({ name: 'tipo', enum: Tipos, required: false, description: 'Filtrar por tipo de producto (opcional)' })
  @ApiResponse({ status: 200, description: 'Producto encontrado.' })
  findAll(
    @Query('tipo') tipo: Tipos,
  ) {
    return this.productosService.findAll(tipo);
  };

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Producto encontrado.' })
  @ApiResponse({ status: 404, description: 'Producto no encontrado.' })
  findOne(
    @Param('id') id: number,
    @Res() res: Response 
  ) {

    const existeProducto = this.productosService.findOne(id);

    existeProducto
      ? res.status(HttpStatus.OK).send(existeProducto)
      : res.status(HttpStatus.NOT_FOUND).send(this.ERROR_PRODUCTO_NO_ENCONTRADO);

  };

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'Producto actualizado.' })
  @ApiResponse({ status: 404, description: 'Producto no encontrado.' })
  update(
    @Param('id') id: number, 
    @Body() updateProductoDto: UpdateProductoDto,
    @Res() res: Response 
  ) {

    const productoFueActualizado = this.productosService.update(
      id, 
      updateProductoDto
    );

    productoFueActualizado 
      ? res.status(HttpStatus.OK).send()
      : res.status(HttpStatus.NOT_FOUND).send(this.ERROR_PRODUCTO_NO_ENCONTRADO);
  };

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Producto eliminado.' })
  @ApiResponse({ status: 404, description: 'Producto no encontrado.' })
  remove(
    @Param('id') id: number,
    @Res() res: Response 
  ) {

    const productoFueEliminado = this.productosService.remove(id);

    productoFueEliminado
      ? res.status(HttpStatus.OK).send()
      : res.status(HttpStatus.NOT_FOUND).send(this.ERROR_PRODUCTO_NO_ENCONTRADO);
  };
};
