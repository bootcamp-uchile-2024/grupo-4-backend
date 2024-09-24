import { ArgumentsHost, ExceptionFilter, HttpException } from '@nestjs/common';
export declare class GeneralFilter<T> implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost): void;
}
