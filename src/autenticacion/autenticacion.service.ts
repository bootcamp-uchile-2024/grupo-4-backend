import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from 'src/usuario/usuario.service';
import { LoginDto } from './dto/login.dto';


@Injectable()
export class AutenticacionService {

    constructor(
        
        private userService: UsuarioService,
        private jwtService: JwtService,
    ){}

   

    async login(loginDto: LoginDto): Promise<string> {
        
        // Obtenemos la entidad completa para tener la contraseña hasheada
        const user = await this.userService.findByEmail(loginDto.email);

        if (!user) {
            throw new HttpException('Usuario no encontrado', HttpStatus.UNAUTHORIZED);
        }

        if(user.constrasenna !== loginDto.contrasenna){
            throw new HttpException('Contraseña incorrecta', HttpStatus.UNAUTHORIZED);
        }

        const payload = { email: user.email, sub: user.id, tipoUsuarioId: user.tipoUsuarioId };
        const jwt = this.jwtService.sign(payload);
       
       return jwt; 
    }

    
}
