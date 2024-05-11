// Objetivo: Definir el DTO para la creación de un producto.
// Motivo de usar arquitectura limpia: Separar la definición de los DTOs de la lógica de negocio.
// Se usa el patrón DTO (Data Transfer Object) para definir la
// estructura de los datos que se transfieren entre las capas de la aplicación.

import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

// Se Utiliza en el contrato (Datasource) de la capa de dominio.
export class CreateProductDto {
  @ApiProperty({
    description: 'Codigo de barras del producto',
    example: '1234567890123',
  })
  @IsString()
  @IsNotEmpty()
  readonly codeBar: string;

  @ApiProperty({
    description: 'Proveedor del producto',
    example: 'Proveedor 1',
  })
  @IsString()
  @IsNotEmpty()
  readonly provider: string;

  @ApiProperty({
    description: 'Nombre del producto',
    example: 'Producto 1',
  })
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({
    description: 'Precio de venta del producto',
    example: 1000,
  })
  @IsNotEmpty()
  readonly sellPrice: number;

  @ApiProperty({
    description: 'Precio de compra del producto',
    example: 800,
  })
  @IsNotEmpty()
  readonly buyPrice: number;

  @ApiProperty({
    description: 'Stock del producto',
    example: 10,
  })
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly stock: number;

  @ApiProperty({
    description: 'Stock mínimo del producto',
    example: 5,
  })
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly minStock: number;

  @ApiProperty({
    description: 'Descripción del producto',
    example: 'Descripción del producto',
  })
  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @ApiProperty({
    description: 'Categoria del producto',
    example: 'Categoria 1',
  })
  @IsString()
  @IsNotEmpty()
  readonly category: string;

  @ApiProperty({
    description: 'Marca del producto',
    example: 'Marca 1',
  })
  @IsString()
  @IsNotEmpty()
  readonly brand: string;

  @ApiProperty({
    description: 'Descuento del producto (presentado en porcentaje)',
    example: 10,
  })
  @IsNotEmpty()
  readonly discount: number;

  @ApiProperty({
    description: 'Imagenes del producto',
    example: ['url1', 'url2'],
  })
  @IsOptional()
  readonly images: string[];
}
