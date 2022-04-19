import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LugarDocument = Lugar & Document;

@Schema()
export class Lugar {
  @Prop({ required: true })
  name: string;
  @Prop()
  description: string;
  @Prop({ required: true })
  departamento: string;
}

export const LugarSchema = SchemaFactory.createForClass(Lugar);
