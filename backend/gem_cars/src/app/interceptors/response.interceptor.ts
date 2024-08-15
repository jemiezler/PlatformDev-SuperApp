import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpStatus,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, any> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        const ctx = context.switchToHttp();
        const response = ctx.getResponse();
        const statusCode = response.statusCode || HttpStatus.OK;

        return {
          statusCode,
          message: data?.message || this.getDefaultMessage(statusCode),
          data: data?.data || data,
        };
      }),
    );
  }

  private getDefaultMessage(statusCode: number): string {
    switch (statusCode) {
      case HttpStatus.CREATED:
        return 'Resource created successfully';
      case HttpStatus.OK:
        return 'Request processed successfully';
      case HttpStatus.NO_CONTENT:
        return 'Resource deleted successfully';
      default:
        return 'Request processed';
    }
  }
}
