import { Controller, Get, Post, Body, Param, Res, HttpStatus, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CompraService } from './compra.service';
import { CreateCompraDto } from './dto/create-compra.dto';
import { CompraDto } from './dto/compra.dto';
import { Response } from 'express';
import { ResponseDto } from './outputDto/responseDto';

@ApiTags('proceso-de-compra')
@Controller('compras')
export class CompraController {
  constructor(private readonly compraService: CompraService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un proceso de compra' })
  @ApiResponse({ status: 201, description: 'Compra realizada exitosamente.', type: ResponseDto })
  @ApiResponse({ status: 400, description: 'Error en los datos enviados.' })
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async create(
    @Body() createCompraDto: CreateCompraDto,
    @Res() res: Response
  ): Promise<Response> {
    const result = await this.compraService.create(createCompraDto);

    if (result.status === 201) {
      return res.status(HttpStatus.CREATED).json(result);
    } else {
      return res.status(HttpStatus.BAD_REQUEST).json(result);
    }
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una compra por su ID' })
  @ApiResponse({ status: 200, description: 'Compra encontrada.', type: CompraDto })
  @ApiResponse({ status: 404, description: 'Compra no encontrada.' })
  async findOne(
    @Param('id') id: number,
    @Res() res: Response
  ): Promise<Response<CompraDto>> {
    const result = await this.compraService.findOne(id);

    if (result.status === 200) {
      return res.status(HttpStatus.OK).json(result);
    } else {
      return res.status(HttpStatus.NOT_FOUND).json(result);
    }
  }
}