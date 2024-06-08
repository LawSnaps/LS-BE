import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { BaseSchema } from './base.schema'; // Assuming you have a BaseSchema that includes common fields

export type RolesDocument = HydratedDocument<Roles>;

@Schema()
export class Roles extends BaseSchema {
  @Prop({ type: Number, ref: 'Company' })
  companyId: number;

  @Prop({ maxlength: 50 })
  name: string;

  @Prop()
  description: string;

  @Prop()
  bcode: number;

  @Prop()
  rowVersion: Buffer; // Assuming you're using this for optimistic concurrency control
}

export const RolesSchema = SchemaFactory.createForClass(Roles);
