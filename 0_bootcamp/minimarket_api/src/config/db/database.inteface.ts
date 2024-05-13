export interface IDatabaseConfig {
  getDatabaseHost(): string;
  getDatabasePort(): number;
  getDatabaseUserName(): string;
  getDatabasePassword(): string;
  getDatabaseName(): string;
}
