import { ConfigService } from '@nestjs/config';
import { LoggerInterceptor } from './logger.interceptor';
import { LoggerService } from './logger.service';

describe('LoggerInterceptor', () => {
  const config: ConfigService = new ConfigService();
  const service: LoggerService = new LoggerService(config);
  it('should be defined', () => {
    expect(new LoggerInterceptor(service)).toBeDefined();
  });
});
