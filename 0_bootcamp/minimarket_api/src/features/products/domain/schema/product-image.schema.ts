import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductImageSchema = ProductImage & Document;

@Schema({ timestamps: true })
export class ProductImage {
  @Prop({ required: true })
  url: string;
  @Prop({ required: true })
  alt: string;
  @Prop({ required: true })
  title: string;
}
