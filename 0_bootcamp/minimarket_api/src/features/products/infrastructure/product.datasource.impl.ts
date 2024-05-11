import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
//Own Imports
import {
  CreateProductDto,
  Product,
  ProductDatasource,
  ProductDocument,
  ProductImage,
  UpdateProductDto,
} from '../domain/domain';
import { LoggerService } from 'src/config/logger/logger.service';

@Injectable()
export class ProductDatasourceImpl implements ProductDatasource {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
    @InjectModel(ProductImage.name)
    private readonly productImageModel: Model<ProductImage>,
    private readonly loggerService: LoggerService,
  ) {}

  async comprarProductos(
    product: CreateProductDto,
  ): Promise<ProductDocument[]> {
    // Deconstruye el producto
    const { codeBar, stock } = product;
    const productsToBuy: ProductDocument[] = [];
    try {
      // Buscar el producto por el código de barras
      const obtainedProduct = await this.obtenerProducto(codeBar);
      // Si el producto no existe, se crea
      if (!obtainedProduct) {
        const createdProduct = await this.createProduct(product);
        productsToBuy.push(createdProduct);
      } else {
        // Si el producto existe, se actualiza el stock
        obtainedProduct.stock += stock;
        await obtainedProduct.save();
        productsToBuy.push(obtainedProduct);
      }
      return productsToBuy;
    } catch (error) {
      this.loggerService.error(
        error.message,
        error.stack,
        'ProductDatasourceImpl',
      );
    }
  }
  obtenerProductos(): Promise<ProductDocument[]> {
    throw new Error('Method not implemented.');
  }
  async obtenerProducto(searchTerm: string): Promise<ProductDocument> {
    // Buscar el producto por el código de barras
    try {
      const product = await this.productModel.findOne({ codeBar: searchTerm });
      this.loggerService.log('ProductDatasourceImpl', 'Product Obtained');
      return product;
    } catch (error) {
      this.loggerService.error(
        error.message,
        error.stack,
        'ProductDatasourceImpl',
      );
    }
  }

  venderProducto(product: UpdateProductDto): Promise<ProductDocument> {
    throw new Error('Method not implemented.');
  }

  private async createProduct(
    product: CreateProductDto,
  ): Promise<ProductDocument> {
    try {
      const createdProduct = await this.productModel.create(product);
      this.loggerService.log('ProductDatasourceImpl', 'Product Created');
      return createdProduct;
    } catch (error) {
      this.loggerService.error(
        error.message,
        error.stack,
        'ProductDatasourceImpl',
      );
    }
  }
}
