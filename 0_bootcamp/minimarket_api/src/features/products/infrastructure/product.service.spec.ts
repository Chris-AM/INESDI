import { Test, TestingModule } from '@nestjs/testing';
import { ProductDatasourceImpl } from './product.datasource.impl';

describe('ProductService', () => {
  let service: ProductDatasourceImpl;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductDatasourceImpl],
    }).compile();

    service = module.get<ProductDatasourceImpl>(ProductDatasourceImpl);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
