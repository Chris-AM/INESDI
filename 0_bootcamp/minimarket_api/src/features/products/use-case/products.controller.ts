import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from '../domain/dto/create-product.dto';
import { UpdateProductDto } from '../domain/dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post('comprar-productos')
  comprarProductos(@Body() createProductDto: CreateProductDto) {
    return this.productsService.comprarProductos(createProductDto);
  }

  @Get('buscar-productos')
  obtenerProductos() {
    return this.productsService.obtenerProductos();
  }

  @Get('buscar-producto-por/:searchTerm')
  obtenerProducto(@Param('searchTerm') searchTerm: string) {
    return this.productsService.obtenerProducto(searchTerm);
  }

  @Patch('vender/:searchedCodeBar/:quantity')
  venderProducto(
    @Param('searchedCodeBar') searchedCodeBar: string,
    @Param('quantity') quantity: string,
  ) {
    return this.productsService.venderProducto(searchedCodeBar, +quantity);
  }
}
