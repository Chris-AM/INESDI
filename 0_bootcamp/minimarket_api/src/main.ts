import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { LoggerService } from './config/logger/logger.service';
import { LoggerInterceptor } from './config/logger/logger.interceptor';
import { ResponseInterceptor } from './config/common/response/response.interceptor';
import { HttpExceptionFilter } from './config/common/http-exception/http-exception.filter';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function minimarket() {
  const app = await NestFactory.create(AppModule);

  const config = new ConfigService();
  const logger = new LoggerService(config);
  const loggerInterceptor = new LoggerInterceptor(logger);
  const responseInterceptor = new ResponseInterceptor();
  const httpException = new HttpExceptionFilter(logger);
  const port = process.env.PORT || 3000;

  app.enableCors();
  app.enableVersioning({
    defaultVersion: '1',
    type: VersioningType.URI,
  });
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.useGlobalInterceptors(loggerInterceptor, responseInterceptor);
  app.useGlobalFilters(httpException);

  // Swagger
  const appDocumntation = new DocumentBuilder()
    .setTitle('Minimarket API')
    .setDescription('API Documentation')
    .setVersion('1.0')
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, appDocumntation);
  SwaggerModule.setup('api/documentation', app, swaggerDocument, {
    swaggerOptions: {
      filter: true,
      showRequestDuration: true,
    },
  });

  await app.listen(port);
  logger.log('🚀 BOOTCAMP', 'Application is running on port: ' + port);
}
minimarket();
