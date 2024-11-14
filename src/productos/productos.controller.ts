import {
  Controller, Get, Post, Body, Param, Delete, Query,  HttpStatus, Res, UseInterceptors, HttpException, UsePipes, ValidationPipe,
  Put,} from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProductoDTO } from './dto/producto.dto';
<<<<<<< HEAD
import { ResponseDto } from './outputDto/responseDto';
import { Response } from 'express';
import { ResponseAllProductsDto } from './outputDto/responseAllProductsDto';
import { UpdateProductoDto } from './dto/update-producto.dto';
=======
import { TiposProducto } from './enum/tiposProductoEnum';
>>>>>>> 23cb33c23a9df542c0b0d5c31518f1a86f82bd02

@ApiTags('productos')
@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'Producto creado exitosamente.',
    type: ResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Error en los datos enviados',
    type: ResponseDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Tipo de producto o categoría no encontrada',
    type: ResponseDto,
  })
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async create(
    @Body() createProductoDto: CreateProductoDto,
    @Res() res: Response,
  ): Promise<Response> {
    const result = await this.productosService.create(createProductoDto);

    if (result.status == 201) {
      return res.status(HttpStatus.CREATED).json(result);
    } else {
      return res.status(HttpStatus.BAD_REQUEST).json(result);
    }
  }

  @Get()
<<<<<<< HEAD
  @ApiResponse({
    status: 200,
    description: 'Lista de productos obtenida exitosamente.',
    type: ResponseDto,
  })
  @ApiQuery({ name: 'page', required: false, type: Number, description: 'Número de página' })
  @ApiQuery({ name: 'pageSize', required: false, type: Number, description: 'Tamaño de página' })
  async findAll(
    @Query('page') page = 1,
    @Query('pageSize') pageSize = 10,
  ): Promise<ResponseAllProductsDto<ProductoDTO[]>> {
    page = Number(page);
    pageSize = Number(pageSize);

    return await this.productosService.findAll(page, pageSize);
=======
  @ApiQuery({
    name: 'tipo',
    enum: TiposProducto,
    required: false,
    description: 'Filtrar por tipo de producto (opcional)',
  })
  findAll( ) {
    return this.productosService.findAll();
>>>>>>> 23cb33c23a9df542c0b0d5c31518f1a86f82bd02
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Producto encontrado.' })
  @ApiResponse({ status: 404, description: 'Producto no encontrado.' })
  async findOne(@Param('id') id: number): Promise<ProductoDTO> {
    const producto = await this.productosService.findOne(+id);
    
    if (!producto) {
      throw new HttpException('Producto no encontrado', HttpStatus.NOT_FOUND);
    }
    return producto;
  }

  @Put(':id')
  @ApiResponse({
    status: 200,
    description: 'Producto actualizado exitosamente.',
    type: ResponseDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Producto no encontrado',
    type: ResponseDto,
  })
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async update(
    @Param('id') id: number,
    @Body() updateProductoDto: UpdateProductoDto,
  ): Promise<ResponseDto<ProductoDTO>> {
    return await this.productosService.update(id, updateProductoDto);
  }

  /*@Delete(':id')
  @ApiResponse({ status: 200, description: 'Producto eliminado.' })
  @ApiResponse({ status: 404, description: 'Producto no encontrado.' })
  async remove(@Param('id') id: number, @Res() res: Response): Promise<Response> {
    const result = await this.productosService.remove(id);

    if (result.status === 200) {
      return res.status(HttpStatus.OK).json(result);
    } else if (result.status === 404) {
      return res.status(HttpStatus.NOT_FOUND).json(result);
    } else {
      return res.status(HttpStatus.BAD_REQUEST).json(result);
    }
<<<<<<< HEAD
  }
=======
    return { message: 'Producto eliminado' };
  }*/
>>>>>>> 23cb33c23a9df542c0b0d5c31518f1a86f82bd02
}
