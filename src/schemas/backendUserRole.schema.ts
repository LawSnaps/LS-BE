import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { BaseSchema } from "./base.schema";
import { HydratedDocument } from 'mongoose';


export type BackendUserRoleSchemaDocument = HydratedDocument<BackendUserRole>;

@Schema()
export class BackendUserRole extends BaseSchema {
  @Prop({ required: true, type: Number })
  backendRoleId: number;

  @Prop({ required: true, type: Number })
  backendUserId: number;
}

export const BackendUserRoleSchema = SchemaFactory.createForClass(BackendUserRole);