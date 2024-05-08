import { ApiProperty } from '@nestjs/swagger';

export class ResponseFormat<T> {
  @ApiProperty({
    description: 'Indicates whether the data is an array or not',
    example: false,
  })
  isArray: boolean;
  @ApiProperty({
    description: 'Shows path of the request',
    example: '/api/v1/minimarket/products',
  })
  path: string;
  @ApiProperty({
    description: 'Shows the status code of the request',
    example: 200,
  })
  statusCode: number;
  @ApiProperty({
    description: 'Shows the method of the request',
    example: 'GET',
  })
  method: string;
  @ApiProperty({
    description: 'Data returned from the request',
    example: {
      id: 1,
      name: 'Product 1',
      price: 10000,
    },
  })
  data: T;
}
