import { Injectable} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { LoggerService } from '../logger/logger.service';

@Injectable()
export class DatabaseService {
  constructor(
    private readonly configService: ConfigService,
    private readonly logger: LoggerService,
  ) {}

  getDatabaseHost(): string {
    const host: string = this.configService.get<string>('APP_HOST');
    const petitionResponse = this.varValidation(host)
      ? (this.logger.error('[DB SERVICE]', 'Database host not found'), null)
      : (this.logger.debug(`Connected At Host => ${host}`), host);
    const encoded = encodeURIComponent(petitionResponse);
    return encoded;
  }
  getDatabasePort(): string {
    const port = this.configService.get<number>('MONGO_PORT');
    const petitionResponse = this.varValidation(port)
      ? (this.logger.error('[DB SERVICE]', 'Database port not found'), null)
      : (this.logger.debug(`Connected At Port => ${port}`), port);
    const encoded = encodeURIComponent(petitionResponse);
    return encoded;
  }
  getDatabaseUsername(): string {
    const username = this.configService.get<string>('MONGO_USERNAME');
    const petitionResponse = this.varValidation(username)
      ? (this.logger.error('[DB SERVICE]', 'Database username not found'), null)
      : (this.logger.debug(`Connected With Username => ${username}`), username);
    const encoded = encodeURIComponent(petitionResponse);
    return encoded;
  }
  getDatabasePassword(): string {
    const password = this.configService.get<string>('MONGO_PASSWORD');
    const petitionResponse = this.varValidation(password)
      ? (this.logger.error('[DB SERVICE]', 'Database password not found'), null)
      : (this.logger.debug(`Connected With Password => ${password}`), password);
    const encoded = encodeURIComponent(petitionResponse);
    return encoded;
  }
  getDatabaseName(): string {
    const database = this.configService.get<string>('MONGO_DATABASE');
    const petitionResponse = this.varValidation(database)
      ? (this.logger.error('[DB SERVICE]', 'Database name not found'), null)
      : (this.logger.debug(`Connected With Database => ${database}`), database);
    const encoded = encodeURIComponent(petitionResponse);
    return encoded;
  }

  private varValidation(variable: string | number): boolean {
    return variable === undefined || variable === null || variable === '';
  }
}
