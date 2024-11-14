import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
  HttpException,
  UseInterceptors,
  ClassSerializerInterceptor,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CarritoDeComprasService } from './carrito-de-compras.service';
import { CreateCarritoDeCompraDto } from './dto/create-carrito-de-compra.dto';
import { UpdateCarritoDeCompraDto } from './dto/update-carrito-de-compra.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { ResponseDto } from './outputDto/responseDto';
import { CarritoDeComprasDto } from './dto/carrito-de-compras.dto';

@ApiTags('carrito-de-compras')
@Controller('carrito-de-compras')
export class CarritoDeComprasController {
  constructor(
    private readonly carritoDeComprasService: CarritoDeComprasService,
  ) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'Carrito creado exitosamente.',
    type: ResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Error en los datos enviados',
    type: ResponseDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Usuario o producto no existe',
    type: ResponseDto,
  })
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async create(
    @Body() createCarritoDeCompraDto: CreateCarritoDeCompraDto,
    @Res() res: Response
  ): Promise<Response> {

    const result = await this.carritoDeComprasService.create(createCarritoDeCompraDto);

    if (result.status == 201) {
      return res.status(HttpStatus.CREATED).json(result);
    } else {
      return res.status(HttpStatus.BAD_REQUEST).json(result);
    }

  }

  @Get('/usuario/:id')
  @ApiOperation({ summary: 'Obtener carritos de un usuario' })
  @ApiResponse({ status: 200, description: 'Carritos encontrados.', type: [CarritoDeComprasDto] })
  @ApiResponse({ status: 404, description: 'Usuario no encontrado.' })
  async findCarritoByUser(
    @Param('id') id: number,
    @Res() res: Response
  ): Promise<Response<CarritoDeComprasDto[]>> {
    const result = await this.carritoDeComprasService.findCarritoByUsuarioId(id);

    if (result.status == 200) {
      return res.status(HttpStatus.OK).json(result);
    } else if (result.status === 404) {
      return res.status(HttpStatus.NOT_FOUND).json(result);
    } else {
      return res.status(HttpStatus.BAD_REQUEST).json(result);
    }
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un carrito por su ID' })
  @ApiResponse({ status: 200, description: 'Carrito encontrado.', type: CarritoDeComprasDto })
  @ApiResponse({ status: 404, description: 'Carrito no encontrado.' })
  async findOne(
    @Param('id') id: number,
    @Res() res: Response
  ): Promise<Response<CarritoDeComprasDto>> {
    const result = await this.carritoDeComprasService.findOne(id);

    if (result.status == 200) {
      return res.status(HttpStatus.OK).json(result);
    } else if (result.status === 404) {
      return res.status(HttpStatus.NOT_FOUND).json(result);
    } else {
      return res.status(HttpStatus.BAD_REQUEST).json(result);
    }
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un carrito' })
  @ApiResponse({
    status: 200,
    description: 'El carrito fue modificado con éxito.',
    type: CarritoDeComprasDto,
  })
  @ApiResponse({ status: 404, description: 'Carrito, usuario o producto no encontrado.' })
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async update(
    @Param('id') id: number,
    @Body() updateCarritoDeCompraDto: UpdateCarritoDeCompraDto,
    @Res() res: Response
  ): Promise<Response<CarritoDeComprasDto>>  {

    const result = await this.carritoDeComprasService.update(id, updateCarritoDeCompraDto);
    if (result.status == 200) {
      return res.status(HttpStatus.OK).json(result);
    } else if (result.status === 404) {
      return res.status(HttpStatus.NOT_FOUND).json(result);
    } else {
      return res.status(HttpStatus.BAD_REQUEST).json(result);
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un carrito' })
  @ApiResponse({
    status: 200,
    description: 'El carrito fue eliminado con éxito.',
  })
  @ApiResponse({ status: 404, description: 'Carrito no encontrado.' })
  async remove(
    @Param('id') id: number,
    @Res() res: Response
  ): Promise<Response<CarritoDeComprasDto>> {
    const result = await this.carritoDeComprasService.remove(id);
    
    if (result.status == 200) {
      return res.status(HttpStatus.OK).json(result);
    } else if (result.status === 404) {
      return res.status(HttpStatus.NOT_FOUND).json(result);
    } else {
      return res.status(HttpStatus.BAD_REQUEST).json(result);
    }
  }
}
