import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
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

    /*async validateUser(correo: string, password: string): Promise<any> {
        const user = await this.userService.findByEmail(correo);

        if (user && await bcrypt.compare(password, user.constrasenna)) {
          const { constrasenna, ...result } = user;        
          console.log('result', result);  
          return result;
        }
        return null;
    };*/

    async login(loginDto: LoginDto): Promise<{ access_token: string, usuario: { nombre: string, apellido: string, correo: string } }> {
        const { email, contrasenna } = loginDto;
        // Obtenemos la entidad completa para tener la contraseña hasheada
        const usuario = await this.userService.findByEmail(email);        
      
        if (!usuario.id) {
          throw new HttpException('Credenciales inválidasss', HttpStatus.UNAUTHORIZED);
        }        
        
        const validPassword = await bcrypt.compare(contrasenna, usuario.constrasenna);        
        if (!validPassword) {
          throw new HttpException('Credenciales inválidas', HttpStatus.UNAUTHORIZED);
        }
      
        const payload = { sub: usuario.id, email: usuario.email, tipoUsuarioId:usuario.tipoUsuarioId };
        console.log('payload', payload);
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
    }

    
}
