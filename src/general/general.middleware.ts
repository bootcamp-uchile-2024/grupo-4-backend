import { Injectable, NestMiddleware } from '@nestjs/common';
import logger from 'src/logger/logger.service';

@Injectable()
export class GeneralMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    logger.verbose('---Middleware General---');
    logger.verbose(`Path: ${req.originalUrl}`);
    logger.verbose(`Method: ${req.method}`);
    
    if (req.body && Object.keys(req.body).length > 0) {
      logger.verbose(`Body: ${JSON.stringify(req.body)}`);
    }

    next();
  }
}
