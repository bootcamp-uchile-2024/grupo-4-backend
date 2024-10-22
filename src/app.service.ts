import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Usar esta URL: https://n1j89d49-3000.brs.devtunnels.ms/api';
  }
}
