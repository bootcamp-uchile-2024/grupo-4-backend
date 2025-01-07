import {
  Controller,
  Get,
  Post,
  Body,  
  Param,  
  ValidationPipe,
  UsePipes,
  UseGuards,
  Req,
} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UsuarioDTO } from './dto/usuario.dto';
import { JwtGuard } from 'src/guard/jwt.guard';
import { RolesGuard } from 'src/guard/roles.guard';
import { RolesPermitidos } from 'src/decorador/roles.decorador';
import { CreateUsuarioRegisterDto } from './dto/create-usuario-register.dto';

@ApiTags('usuarios')
@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @ApiBearerAuth()
  @UseGuards(JwtGuard, RolesGuard)
  @Post()
  @RolesPermitidos(1)
  @ApiOperation({ summary: 'Crear un usuario. Aceeso solo administradores' })
  @ApiResponse({ status: 201, description: 'Usuario creado exitosamente.' })
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async create(@Body() createUsuarioDto: CreateUsuarioDto): Promise<UsuarioDTO> {
    return this.usuarioService.create(createUsuarioDto);
  }

  @Post('registro')
  @ApiOperation({ summary: 'Crear registro de usuario' })
  @ApiResponse({ status: 201, description: 'Cuenta creada exitosamente.' })
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async createBasic(
    @Body() dto: CreateUsuarioRegisterDto
  ): Promise<UsuarioDTO> {
    return this.usuarioService.createUserRegister(dto);
  }

  @ApiOperation({ summary: 'Listado de usuarios registrados' })
  @Get()
  async findAll(): Promise<UsuarioDTO[]> {
    return this.usuarioService.findAll();
  }

  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @ApiOperation({ summary: 'Búsqueda de usuario por RUT' }) 
  @Get(':rut')
  @ApiResponse({ status: 200, description: 'Usuario encontrado.' })
  @ApiResponse({ status: 404, description: 'Usuario no encontrado.' })
  async findOne(@Param('rut') rut: string, @Req() req): Promise<UsuarioDTO> {
    return this.usuarioService.findOne(rut, req);
  }

  @ApiOperation({ summary: 'Búsqueda de usuario por email' })
  @Get(':email')
  @ApiResponse({ status: 200, description: 'Usuario encontrado.' })
  @ApiResponse({ status: 404, description: 'Usuario no encontrado.' })
  async findByEmail(@Param('email') email: string): Promise<UsuarioDTO> {
    return this.usuarioService.findByEmail(email);
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
