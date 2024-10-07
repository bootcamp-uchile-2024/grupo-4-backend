import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { catchError, map, Observable } from 'rxjs';

@Injectable()
export class GeneralInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((val) => {
        console.log('---Interceptor---');
        console.log('---En la salida del controller---');
        console.log(val);
        return val;
      }),
      //catchError((err) => { console.log('DESPUES-ERROR...'); throw err; })
    );
  }
}
