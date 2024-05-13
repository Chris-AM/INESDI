import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 } from 'uuid';

export type ProductDocument = Product & Document;

@Schema({ timestamps: true })
export class Product {
  @Prop({ unique: true, default: v4 })
  id: string;
  @Prop({ required: true })
  codeBar: string;
  @Prop({ required: true })
  provider: string;
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  sellPrice: number;
  @Prop({ required: true })
  buyPrice: number;
  @Prop({ required: true })
  stock: number;
  @Prop({ required: true })
  minStock: number;
  @Prop({ required: true })
  description: string;
  @Prop({ required: true })
  category: string;
  @Prop({ required: true })
  brand: string;
  @Prop({ required: true })
  discount: number;
  @Prop({ ref: 'ProductImage' })
  images: string[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);

ProductSchema.method('toJSON', function () {
  const { _id, ...object } = this.toObject();
  return object;
});
