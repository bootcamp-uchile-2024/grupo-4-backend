import { Injectable, Logger, NestMiddleware } from "@nestjs/common";


@Injectable()
export class UsuarioMiddleware implements NestMiddleware {

  private readonly logger = new Logger(UsuarioMiddleware.name)
  use(req: any, res: any, next: () => void) {
    const bodyModificado = { 
        ...req.body, 
        contrasenna: req.body.contrasenna ? '*****' : undefined
      };
    this.logger.log(`[Middleware] {${req.originalUrl}, ${req.method}} Datos de entrada: ${JSON.stringify(bodyModificado)}`);
    next();
  }
}

