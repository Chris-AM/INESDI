import { Injectable, Logger } from '@nestjs/common';
import { ILogger } from './logger.interface';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class LoggerService extends Logger implements ILogger {
  constructor(private readonly config: ConfigService) {
    super();
  }
  service(context: string): void {
    super.log(`[SERVICE] => ${context}`);
  }

  log(context: string, message: string): void {
    super.log(`[LOG] | Context => ${context} | Message => ${message}`);
  }
  
  error(context: string, message: string, trace?: string): void {
    super.error(`[ERROR] | Context => ${context} | Message => ${message} | Trace => ${trace}`);
  }

  warn(context: string, message: string): void {
    super.warn(`[WARN] | Context => ${context} | Message => ${message}`);
  }
}
