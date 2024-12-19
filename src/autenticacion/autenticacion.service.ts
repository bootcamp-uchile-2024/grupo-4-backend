import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsuarioService } from 'src/usuario/usuario.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AutenticacionService {

    constructor(
        private userService: UsuarioService,
        private jwtService: JwtService,
    ){}

    async validateUser(correo: string, password: string): Promise<any> {
        const user = await this.userService.findByEmail(correo);

        if (user && await bcrypt.compare(password, user.constrasenna)) {
          const { constrasenna, ...result } = user;
          return result;
        }
        return null;
    };

    async login(loginDto: LoginDto): Promise<{ access_token: string, usuario: { nombre: string, apellido: string, correo: string } }> {
        const { email, contrasenna } = loginDto;
        // Obtenemos la entidad completa para tener la contraseña hasheada
        const usuario = await this.userService.findByEmail(email);

        console.log(usuario);
      
        if (!usuario.id) {
          throw new HttpException('Credenciales inválidas', HttpStatus.UNAUTHORIZED);
        }
      
        const validPassword = await bcrypt.compare(contrasenna, usuario.constrasenna);
        console.log('validPassword', validPassword);
        if (!validPassword) {
          throw new HttpException('Credenciales inválidas', HttpStatus.UNAUTHORIZED);
        }
      
        const payload = { sub: usuario.id, email: usuario.email };
        const access_token = this.jwtService.sign(payload);

        const { 
            nombre, 
            apellido,
            email: correo,
        } = usuario;
      
        return { 
            access_token,
            usuario: {
                nombre,
                apellido,
                correo,
            }
        };
    };
}
