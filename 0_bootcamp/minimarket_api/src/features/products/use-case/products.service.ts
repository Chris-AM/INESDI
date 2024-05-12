import { Observable, map } from 'rxjs';
import { Injectable } from '@nestjs/common';
// Own Imports
import { ProductDatasourceImpl } from '../infrastructure/product.datasource.impl';
import { CreateProductDto, Product, UpdateProductDto } from '../domain/domain';

@Injectable()
export class ProductsService {
  constructor(private readonly datasource: ProductDatasourceImpl) {}

  comprarProductos(createProductDto: CreateProductDto) {
    return this.datasource.comprarProductos(createProductDto);
  }

  obtenerProductos() {
    return this.datasource.obtenerProductos();
  }

  obtenerProducto(searchTerm: string) {
    return this.datasource.obtenerProducto(searchTerm);
  }

  async venderProducto(
    searchedCodeBar: string,
    quantity: number,
  ) {
    const newSell = await this.datasource.venderProducto(
      searchedCodeBar,
      quantity,
    );
    if (newSell.stock <= newSell.minStock) {
      this.bajoStock(newSell);
    }
    console.log('🚀 products.service.venderProducto() ~ newSell', newSell);
    return newSell;
  }

  // Se crea flag privada que indica si un producto está llegando a un minimo de stock
  private bajoStock(product: Product) {
    const { codeBar, name, provider, minStock } = product;
    return `El Producto${codeBar}: ${name} llegó a un stock mínimo ${minStock} y necesita ser reabastecido por el proveedor ${provider}`;
  }
}
