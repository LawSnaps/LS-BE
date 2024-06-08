import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { BaseSchema } from './base.schema';
import { HydratedDocument } from 'mongoose';

export type MasterRoleSchemaDocument = HydratedDocument<MasterRole>;

@Schema()
export class MasterRole extends BaseSchema {
  @Prop({ type: String, maxlength: 100, default: null })
  public name?: string;

  @Prop({ type: String, maxlength: 500, default: null })
  public description?: string;
}

export const MasterRoleSchema = SchemaFactory.createForClass(MasterRole);
