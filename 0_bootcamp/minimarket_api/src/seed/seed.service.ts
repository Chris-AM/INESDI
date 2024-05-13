import { Injectable } from '@nestjs/common';
import { ProductDatasourceImpl } from 'src/features/products/infrastructure/product.datasource.impl';
import { productMock } from './mocks/product.mock';

@Injectable()
export class SeedService {
  constructor(private readonly productDataSource: ProductDatasourceImpl) {}

  public async runSeed() {
    await this.prepareData();
    await this.seedProducts();
  }

  private async prepareData() {
    await this.productDataSource.deleteBySeed();
  }

  private async seedProducts() {
    const productsToSeed = productMock;
    const insertPromises = [];
    productsToSeed.forEach((product) => {
      insertPromises.push(this.productDataSource.comprarProductos(product));
    });
    await Promise.all(insertPromises);
    return true;
  }
}
