import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Res } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';


@ApiTags('usuarios')
@Controller('usuario')
export class UsuarioController {

  private ERROR_USUARIO_NO_ENCONTRADO = {};

  constructor(private readonly usuarioService: UsuarioService) {

    this.ERROR_USUARIO_NO_ENCONTRADO = {
      status: HttpStatus.NOT_FOUND,
      mensaje: 'Usuario no encontrado'
    };

  };

  @Post()
  @ApiResponse({ status: 201, description: 'Usuario creado exitosamente.' })
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  };

  @Get()
  findAll() {
    return this.usuarioService.findAll();
  };

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Usuario encontrado.' })
  @ApiResponse({ status: 404, description: 'Usuario no encontrado.' })
  findOne(
    @Param('id') id: number,
    @Res() res: Response 
  ) {
    const usuario = this.usuarioService.findOne(id);
    
    usuario ?
      res.status(HttpStatus.OK).json(usuario) : 
      res.status(HttpStatus.NOT_FOUND).send(
        this.ERROR_USUARIO_NO_ENCONTRADO
      );
  };

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'Usuario modificado.' })
  @ApiResponse({ status: 404, description: 'Usuario no encontrado.' })
  update(
    @Param('id') id: number, 
    @Body() updateUsuarioDto: UpdateUsuarioDto,
    @Res() res: Response 
  ) {

    const usuarioFueModificado = this.usuarioService.update(
      id, 
      updateUsuarioDto
    );

    usuarioFueModificado ?
      res.status(HttpStatus.OK).send() :
      res.status(HttpStatus.NOT_FOUND).send(
        this.ERROR_USUARIO_NO_ENCONTRADO
      );
  };

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Usuario eliminado.' })
  @ApiResponse({ status: 404, description: 'Usuario no encontrado.' })
  remove(
    @Param('id') id: number,
    @Res() res: Response 
  ) {
    
    const usuarioFueEliminado = this.usuarioService.remove(id);

    usuarioFueEliminado ?
      res.status(HttpStatus.OK).send() :
      res.status(HttpStatus.NOT_FOUND).send(
        this.ERROR_USUARIO_NO_ENCONTRADO
      );

  };

  @Patch(':id/carrito')
  @ApiResponse({ status: 200, description: 'Carrito modificado.' })
  @ApiResponse({ status: 404, description: 'Usuario no encontrado.' })
  updateCarrito(
    @Param('id') id: number, 
    @Body() updateCarritoDeCompraDto,
    @Res() res: Response 
  ) {

    const carritoFueModificado = this.usuarioService.updateCarrito(
      id, 
      updateCarritoDeCompraDto
    );

    carritoFueModificado ?
      res.status(HttpStatus.OK).send() :
      res.status(HttpStatus.NOT_FOUND).send(
        this.ERROR_USUARIO_NO_ENCONTRADO
      );
  };

  @Delete(':id/carrito')
  @ApiResponse({ status: 200, description: 'Carrito eliminado.' })
  @ApiResponse({ status: 404, description: 'Usuario no encontrado.' })
  deleteCarrito(
    @Param('id') id: number, 
    @Res() res: Response 
  ) {

    const carritoFueEliminado = this.usuarioService.deleteCarrito(id);

    carritoFueEliminado ?
      res.status(HttpStatus.OK).send() :
      res.status(HttpStatus.NOT_FOUND).send(
        this.ERROR_USUARIO_NO_ENCONTRADO
      );

  };

};
