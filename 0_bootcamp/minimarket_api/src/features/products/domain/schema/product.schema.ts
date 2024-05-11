<<<<<<< HEAD
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 } from 'uuid';

export type ProductDocument = Product & Document;
=======
import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 } from 'uuid';
import { ProductImage } from './product-image.schema';

export type ProductSchema = Product & Document;
>>>>>>> 6289733 (:construction: declaring product schemas. Not final)

@Schema({ timestamps: true })
export class Product {
  @Prop({ unique: true, default: v4 })
  id: string;
  @Prop({ required: true })
<<<<<<< HEAD
  codeBar: string;
  @Prop({ required: true })
  provider: string;
  @Prop({ required: true })
=======
>>>>>>> 6289733 (:construction: declaring product schemas. Not final)
  name: string;
  @Prop({ required: true })
  sellPrice: number;
  @Prop({ required: true })
  buyPrice: number;
  @Prop({ required: true })
  stock: number;
  @Prop({ required: true })
<<<<<<< HEAD
  minStock: number;
  @Prop({ required: true })
  description: string;
  @Prop({ required: true })
=======
  description: string;
  @Prop({ required: true })
  image: string;
  @Prop({ required: true })
>>>>>>> 6289733 (:construction: declaring product schemas. Not final)
  category: string;
  @Prop({ required: true })
  brand: string;
  @Prop({ required: true })
  discount: number;
<<<<<<< HEAD
  @Prop({ ref: 'ProductImage' })
  images: string[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);

ProductSchema.method('toJSON', function () {
  const { _id, ...object } = this.toObject();
  return object;
});
=======
  @Prop({ required: true, ref: 'ProductImage' })
  images: ProductImage[];
}
>>>>>>> 6289733 (:construction: declaring product schemas. Not final)
