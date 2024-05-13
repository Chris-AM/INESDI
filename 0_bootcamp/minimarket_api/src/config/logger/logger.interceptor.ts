import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { HttpArgumentsHost } from '@nestjs/common/interfaces';
import { Observable, tap } from 'rxjs';
import { LoggerService } from './logger.service';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  constructor(private readonly service: LoggerService) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    const httpContext: HttpArgumentsHost = context.switchToHttp();
    const request = httpContext.getRequest();
    const ip = this.getIp(request);

    this.service.log(
      `Petición Recibida:`,
      `A => ${request.url}, Método => ${request.method}, IP => ${ip}`,
    );
    return next.handle().pipe(tap(() => {
      this.service.log(
        `Petición Finalizada:`,
        `Tiempo de ejecución => ${Date.now() - now}ms`,
      );
    }));
  }

  private getIp(request: any): string {
    let ip: string;
    const ipAddr = request.headers['x-forwarded-for'];
    if (ipAddr) {
      const list = ipAddr.split(',');
      ip = list[list.length - 1];
    } else {
      ip = request.connection.remoteAddress;
    }
    const parsedIp = ip.replace('::ffff:', '');
    return parsedIp;
  }
}
