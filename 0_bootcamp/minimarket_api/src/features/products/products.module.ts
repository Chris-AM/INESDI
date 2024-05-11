import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { ProductsService } from './use-case/products.service';
import { ProductsController } from './use-case/products.controller';
import { ProductDatasourceImpl } from './infrastructure/product.datasource.impl';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './domain/schema/product.schema';
import { ProductImage } from './domain/domain';
import { PaginationMiddleware } from 'src/config/common/pagination/pagination.middleware';
import { EnvironmentConfigModule } from '../../config/config.module';

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
        name: ProductImage.name,
        useFactory: () =>
          ProductSchema.plugin(require('mongoose-autopopulate')),
      },
      // Import the ProductImage schema and apply the mongoose-paginate-v2 plugin
      {
        name: ProductImage.name,
        useFactory: () => ProductSchema.plugin(require('mongoose-paginate-v2')),
      },
      {
        name: Product.name,
        useFactory: () => ProductSchema.plugin(require('mongoose-paginate-v2')),
      },
    ]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService, ProductDatasourceImpl],
})
export class ProductsModule {
  configure(consumer: MiddlewareConsumer){
    consumer
    .apply(PaginationMiddleware)
    .forRoutes({ path: 'v1/minimarket/products', method: RequestMethod.GET })
  }
}
