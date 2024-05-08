import { DatabaseService } from './database.service';

export const getMongooseODMConfig = (service: DatabaseService) => ({
  // uri: `mongodb://${service.getDatabaseUsername()}:${service.getDatabasePassword()}@${service.getDatabaseHost()}:${service.getDatabasePort()}/${service.getDatabaseName()}`,
  uri: `mongodb://${service.getDatabaseUsername()}:${service.getDatabasePassword()}@${service.getDatabaseHost()}:${service.getDatabasePort()}`,
});
