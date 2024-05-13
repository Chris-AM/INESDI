import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnvironmentConfigModule } from './config/config.module';
import { MinimarketModule } from './features/minimarket.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [EnvironmentConfigModule, MinimarketModule, SeedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
