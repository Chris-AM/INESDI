import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LoggerService } from './logger/logger.service';
import { DatabaseService } from './db/database.service';
import { MongooseModule } from '@nestjs/mongoose';
import { getMongooseODMConfig } from './db/database.helper';

const configService = new ConfigService();
const loggerService = new LoggerService(configService);
const databaseService = new DatabaseService(configService, loggerService);
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    MongooseModule.forRoot(getMongooseODMConfig(databaseService).uri),
  ],
  controllers: [],
  providers: [LoggerService, DatabaseService],
  exports: [LoggerService, DatabaseService],
})
export class EnvironmentConfigModule {
  constructor() {
    loggerService.log(
      'ConfigModule',
      getMongooseODMConfig(databaseService).uri,
    );
  }
}
