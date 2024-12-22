import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { CLAVE_ROLES } from "src/decorador/roles.decorador";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const rolUsuarioAutenticado = request.user.tipoUsuarioId; // Asegúrate de que exista `request.user`

    console.log('rolUsuarioAutenticado: ', rolUsuarioAutenticado);

    // Obtén los roles requeridos desde el decorador
    const requerido = this.reflector.getAllAndOverride<number[]>(CLAVE_ROLES, [
      context.getHandler(),
      context.getClass(),
    ]);

    console.log('Roles requeridos: ', requerido);

    // Si no hay roles requeridos, permite el acceso
    if (!requerido) {
      return true;
    }

    // Verifica si el rol del usuario está dentro de los roles requeridos
    const encontrado = requerido.includes(rolUsuarioAutenticado);
    console.log('Encontrado: ', encontrado);
    if (!encontrado) {
      console.log('Acceso denegado: el rol del usuario no está autorizado.');
      return false;
    }

    console.log('Acceso permitido: el rol del usuario está autorizado.');
    return true;
  }
}
    