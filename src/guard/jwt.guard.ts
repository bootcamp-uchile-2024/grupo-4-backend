import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsuarioService } from "src/usuario/usuario.service";

@Injectable()
export class JwtGuard implements CanActivate {
  constructor(private readonly usuariosService: UsuarioService,
    private readonly jwtService: JwtService,
  ) {}

  async canActivate(context: ExecutionContext):Promise<boolean>  {
    const request = context.switchToHttp().getRequest();
    if(!request.headers.authorization){
    return false;
    }
    const jwt = request.headers.authorization.split(' ')[1];
   
    
    //const token = this.usuariosService.desencriptar(jwt);    

    try{
      const infoJwt = await this.jwtService.verifyAsync(jwt);
      request.user = infoJwt;
      console.log('infoJwt: ', infoJwt);
      
      return true;
    }catch(error){
      return false;
    }   
  }
}