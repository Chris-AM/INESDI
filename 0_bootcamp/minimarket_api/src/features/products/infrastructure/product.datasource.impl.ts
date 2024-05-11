import { Model } from 'mongoose';
import { Observable } from 'rxjs';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
//Own Imports
import {
  CreateProductDto,
  Product,
  ProductDatasource,
  ProductDocumen,
  ProductImage,
  UpdateProductDto,
} from '../domain/domain';

@Injectable()
export class ProductDatasourceImpl implements ProductDatasource {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocumen>,
    @InjectModel(ProductImage.name)
    private readonly productImageModel: Model<ProductImage>,
  ) {}
  comprarProductos(product: CreateProductDto): Observable<Product[]> {
    // Deconstruye el producto
    const { codeBar, name, stock, buyPrice, minStock } = product;
    // Revisar si el producto ya existe
    const obtainedProduct = this.obtenerProducto(codeBar);
    throw new Error('Method not implemented.');
  }
  obtenerProductos(): Observable<Product[]> {
    throw new Error('Method not implemented.');
  }
  obtenerProducto(searchTerm: string): Observable<Product> {
    // Buscar el producto por el código de barras
    const product = this.productModel.findOne({ codeBar: searchTerm });
    throw new Error('Method not implemented.');
  }
  venderProducto(product: UpdateProductDto): Observable<Product> {
    throw new Error('Method not implemented.');
  }
}
