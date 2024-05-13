import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { ProductsService } from './use-case/products.service';
import { ProductsController } from './use-case/products.controller';
import { ProductDatasourceImpl } from './infrastructure/product.datasource.impl';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './domain/schema/product.schema';
import { PaginationMiddleware } from 'src/config/common/pagination/pagination.middleware';
import { EnvironmentConfigModule } from '../../config/config.module';
import { SeedModule } from 'src/seed/seed.module';

@Module({
  imports: [
    EnvironmentConfigModule,
    MongooseModule.forFeatureAsync([
      // Import the Product schema and apply the mongoose-autopopulate plugin
      {
        name: Product.name,
        useFactory: () =>
          ProductSchema.plugin(require('mongoose-autopopulate')),
      },
      {
        name: Product.name,
        useFactory: () => ProductSchema.plugin(require('mongoose-paginate-v2')),
      },
    ]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService, ProductDatasourceImpl],
  exports: [ProductsService, ProductDatasourceImpl],
})
export class ProductsModule {
  configure(consumer: MiddlewareConsumer){
    consumer
    .apply(PaginationMiddleware)
    .forRoutes({ path: 'v1/minimarket/products', method: RequestMethod.GET })
  }
}
