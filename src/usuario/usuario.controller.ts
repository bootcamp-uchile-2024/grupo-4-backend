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
  HttpException,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { UsuarioDTO } from './dto/usuario.dto';

@ApiTags('usuarios')
@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Usuario creado exitosamente.' })
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async create(@Body() createUsuarioDto: CreateUsuarioDto): Promise<UsuarioDTO> {
    return this.usuarioService.create(createUsuarioDto);
  }

  @Get()
  async findAll(): Promise<UsuarioDTO[]> {
    return this.usuarioService.findAll();
  }

  @Get(':rut')
  @ApiResponse({ status: 200, description: 'Usuario encontrado.' })
  @ApiResponse({ status: 404, description: 'Usuario no encontrado.' })
  async findOne(@Param('rut') rut: string): Promise<UsuarioDTO> {
    return this.usuarioService.findOne(rut);
  }
  

 /* @Patch(':id')
  @ApiResponse({ status: 200, description: 'Usuario modificado.' })
  @ApiResponse({ status: 404, description: 'Usuario no encontrado.' })
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  update(@Param('id') id: number, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    const usuarioFueModificado = this.usuarioService.update(
      id,
      updateUsuarioDto,
    );
    if (!usuarioFueModificado) {
      throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
    }
    return { message: 'Usuario modificado' };
  }*/

  /*@Delete(':id')
  @ApiResponse({ status: 200, description: 'Usuario eliminado.' })
  @ApiResponse({ status: 404, description: 'Usuario no encontrado.' })
  remove(@Param('id') id: number) {
    const usuarioFueEliminado = this.usuarioService.remove(id);
    if (!usuarioFueEliminado) {
      throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
    }
    return { message: 'Usuario eliminado' };
  }*/

  /*@Patch(':id/carrito')
  @ApiResponse({ status: 200, description: 'Carrito modificado.' })
  @ApiResponse({ status: 404, description: 'Usuario no encontrado.' })
  updateCarrito(@Param('id') id: number, @Body() updateCarritoDeCompraDto) {
    const carritoFueModificado = this.usuarioService.updateCarrito(
      id,
      updateCarritoDeCompraDto,
    );
    if (!carritoFueModificado) {
      throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
    }
    return { message: 'Carrito modificado' };
  }*/

  /*@Delete(':id/carrito')
  @ApiResponse({ status: 200, description: 'Carrito eliminado.' })
  @ApiResponse({ status: 404, description: 'Usuario no encontrado.' })
  deleteCarrito(@Param('id') id: number) {
    const carritoFueEliminado = this.usuarioService.deleteCarrito(id);
    if (!carritoFueEliminado) {
      throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
    }
    return { message: 'Carrito eliminado' };
  }*/
}
