import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnvironmentConfigModule } from './config/config.module';
import { MinimarketModule } from './features/minimarket.module';

@Module({
  imports: [EnvironmentConfigModule, MinimarketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
