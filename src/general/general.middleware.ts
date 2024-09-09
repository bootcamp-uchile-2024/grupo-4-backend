import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class GeneralMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log("---Middleware General---");
    console.log('Path:' + req.originalUrl);
    console.log('Method:' + req.method);    
    if (req.body) {      
      console.log(req.body);
    }
    
    
    next();
  }
}
