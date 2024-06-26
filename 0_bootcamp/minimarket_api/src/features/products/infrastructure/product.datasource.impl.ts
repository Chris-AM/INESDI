import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
//Own Imports
import {
  CreateProductDto,
  Product,
  ProductDatasource,
  ProductDocument,
  UpdateProductDto,
} from '../domain/domain';
import { LoggerService } from 'src/config/logger/logger.service';

@Injectable()
export class ProductDatasourceImpl implements ProductDatasource {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
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

  async obtenerProductos(): Promise<ProductDocument[]> {
    const allProducts = await this.productModel.find();
    this.loggerService.log('ProductDatasourceImpl', 'Products Obtained');
    return allProducts;
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

  async venderProducto(
    searchedCodeBar: string,
    quantity: number,
  ): Promise<ProductDocument> {
    try {
      const obtainedProduct = await this.obtenerProducto(searchedCodeBar);
      if (!obtainedProduct) {
        throw new NotFoundException('Product not found');
      }
      const newStockProduct = (obtainedProduct.stock -= quantity);
      obtainedProduct.stock = newStockProduct;
      return obtainedProduct.save();
    } catch (error) {
      this.loggerService.error(
        error.message,
        error.stack,
        'ProductDatasourceImpl',
      );
    }
  }

  //* Delete method is not at datasource
  //* level because it's not used by the service
  public async deleteBySeed(): Promise<void> {
    const query = this.productModel.deleteMany({});
    await query.exec();
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
