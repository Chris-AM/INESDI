import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 } from 'uuid';
import { ProductImage } from './product-image.schema';

export type ProductSchema = Product & Document;

@Schema({ timestamps: true })
export class Product {
  @Prop({ unique: true, default: v4 })
  id: string;
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  sellPrice: number;
  @Prop({ required: true })
  buyPrice: number;
  @Prop({ required: true })
  stock: number;
  @Prop({ required: true })
  description: string;
  @Prop({ required: true })
  image: string;
  @Prop({ required: true })
  category: string;
  @Prop({ required: true })
  brand: string;
  @Prop({ required: true })
  discount: number;
  @Prop({ required: true, ref: 'ProductImage' })
  images: ProductImage[];
}
