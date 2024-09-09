import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { Console } from 'console';
import { Request, Response } from 'express';


@Catch(HttpException)
export class GeneralFilter<T> implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    console.log('---Filtrando excepción---');
    
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const message = exception.message;

    console.log('Status:', status);
    console.log('Message:', message);

    response.status(status).json({
      statusCode: status,
      error: exception.getResponse()
    });
  }
}
