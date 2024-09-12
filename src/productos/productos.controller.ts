import { Controller, Get, Post, Body, Patch, Param, Delete, Query, HttpStatus, Res, UseInterceptors, HttpException, UsePipes, ValidationPipe } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Tipos } from './entities/producto.entity';
import { Response } from 'express';
import { GeneralInterceptor } from 'src/general/general.interceptor';


@ApiTags('productos')
@Controller('productos')
export class ProductosController {

  constructor(private readonly productosService: ProductosService) {}

  @Post()

  @ApiResponse({ status: 201, description: 'Producto creado exitosamente.' })
  @ApiResponse({ status: 400, description: 'Error en los datos enviados' }) 
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
   create(@Body() createProductoDto: CreateProductoDto) {
    const crearProducto =  this.productosService.create(createProductoDto);
    if (!crearProducto) {
      throw new HttpException('Producto mal creado, ingresalos bien', HttpStatus.BAD_REQUEST);
    }
  }


  @Get()
  @ApiQuery({ name: 'tipo', enum: Tipos, required: false, description: 'Filtrar por tipo de producto (opcional)' })
  findAll(@Query('tipo') tipo: Tipos) {
    return this.productosService.findAll(tipo);
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Producto encontrado.' })
  @ApiResponse({ status: 404, description: 'Producto no encontrado.' })
  findOne(@Param('id') id: number) {
    const producto = this.productosService.findOne(id);
    if (!producto) {
      throw new HttpException('Producto no encontrado', HttpStatus.NOT_FOUND);
    }
    return producto;
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'Producto actualizado.' })
  @ApiResponse({ status: 404, description: 'Producto no encontrado.' })
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  update(@Param('id') id: number, @Body() updateProductoDto: UpdateProductoDto) {
    const productoFueActualizado = this.productosService.update(id, updateProductoDto);
    if (!productoFueActualizado) {
      throw new HttpException('Producto no encontrado', HttpStatus.NOT_FOUND);
    }
    return { message: 'Producto actualizado' };
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Producto eliminado.' })
  @ApiResponse({ status: 404, description: 'Producto no encontrado.' })
  remove(@Param('id') id: number) {
    const productoFueEliminado = this.productosService.remove(id);
    if (!productoFueEliminado) {
      throw new HttpException('Producto no encontrado', HttpStatus.NOT_FOUND);
    }
    return { message: 'Producto eliminado' };
  }
}
