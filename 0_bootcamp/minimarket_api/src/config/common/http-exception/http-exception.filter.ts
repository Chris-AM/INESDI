import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  InternalServerErrorException,
} from '@nestjs/common';
import { LoggerService } from 'src/config/logger/logger.service';

@Catch()
export class HttpExceptionFilter<T> implements ExceptionFilter {
  constructor(private readonly logger: LoggerService) {
    this.logger.service('HttpExceptionFilter');
  }
  catch(exception: any, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse();
    const request = context.getRequest();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : new InternalServerErrorException('Internal Server Error');
    const message =
      exception instanceof HttpException
        ? exception.getResponse()
        : exception.message;

    this.logger.error(
      'HttpExceptionFilter',
      `Error: ${message}, Status: ${status}`,
    );

    response.status(status).json({
      time: new Date().toISOString(),
      path: request.url,
      method: request.method,
      status: status,
      error: message,
    });
  }
}
