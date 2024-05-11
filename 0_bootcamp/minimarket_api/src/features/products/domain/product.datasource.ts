// Objetivo: Definir contratos de datasource para productos.
// Se crean verbos para la manipulación de productos.
// Por lo general se definen los verbos CRUD (Create, Read, Update, Delete).
// Pero realmente se declaran las acciones que
// puede realizar un usuario manipulando la app

import { Observable } from 'rxjs';
import { Product } from './schema/product.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

export interface ProductDatasource {
  // Verbo para comprar productos
  // Recibe un producto (DTO), del cual crea una instancia y retorna un observable de productos
  // Será verbo POST
  comprarProductos(product: CreateProductDto): Observable<Product[]>;
  // Verbo para obtener productos
  // Retorna un observable de productos
  // Será verbo GET
  obtenerProductos(): Observable<Product[]>;
  // Verbo para obtener un producto por algún criterio de búsqueda
  // Se le pasa un término de búsqueda y retorna un observable de un producto
  // Será verbo GET
  obtenerProducto(searchTerm: string): Observable<Product>;
  // Verbo para obtener un producto por id y luego venderlo
  // Recibe un producto (DTO), del cual descrimina por codigo de barras
  // y retorna un observable de productos
  // Será verbo PATCH y actualizará el stock del producto
  venderProducto(product: UpdateProductDto): Observable<Product>;
}
