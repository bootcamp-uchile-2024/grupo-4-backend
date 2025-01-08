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
  

 
}
