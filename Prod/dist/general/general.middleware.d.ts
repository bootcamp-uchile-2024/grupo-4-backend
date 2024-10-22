import { NestMiddleware } from '@nestjs/common';
export declare class GeneralMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void): void;
}
