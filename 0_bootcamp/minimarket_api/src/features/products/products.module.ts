import { Module } from '@nestjs/common';
import { ProductsService } from './use-case/products.service';
import { ProductsController } from './use-case/products.controller';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
