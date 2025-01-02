import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AutenticacionService } from './autenticacion.service';
import { LoginDto } from './dto/login.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('autenticacion')
@Controller('autenticacion')
export class AutenticacionController {
  constructor(private readonly autenticacionService: AutenticacionService) {}

  @Post('login')
  @ApiResponse({ status: 200, description: 'Inicio de sesión exitoso.' })
  @ApiResponse({ status: 401, description: 'Credenciales inválidas.' })
  @ApiBody({ type: LoginDto })
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async login(@Body() loginDto: LoginDto): Promise<string> {
    // Lógica de login:
    // 1. Verificar usuario y contraseña
    // 2. Generar el JWT si las credenciales son correctas
    // 3. Retornar el token

    return this.autenticacionService.login(loginDto); 
  }
}
