import { Observable, map } from 'rxjs';
import { Injectable } from '@nestjs/common';
// Own Imports
import { ProductDatasourceImpl } from '../infrastructure/product.datasource.impl';
import { CreateProductDto, Product, UpdateProductDto } from '../domain/domain';

@Injectable()
export class ProductsService {
  constructor(private readonly datasource: ProductDatasourceImpl) {}

  create(createProductDto: CreateProductDto) {
    return this.datasource.comprarProductos(createProductDto);
  }

  findAll() {
    return `This action returns all products`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }

  // Se crea flag privada que indica si un producto está llegando a un minimo de stock
  private bajoStock(product: Product){
    const { codeBar, minStock } = product;
    const obtainedProduct = this.datasource.obtenerProducto(codeBar);
    
  }
}
