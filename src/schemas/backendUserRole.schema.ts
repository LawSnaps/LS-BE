import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { BaseSchema } from "./base.schema";
import { HydratedDocument, Types } from 'mongoose';


export type BackendUserRoleSchemaDocument = HydratedDocument<BackendUserRole>;

@Schema()
export class BackendUserRole extends BaseSchema {
  @Prop({ type: Types.ObjectId, ref: 'BackendRole', required: true })
  backendRoleId: number;

  @Prop({ type: Types.ObjectId, ref: 'BackendUser', required: true })
  backendUserId: number;
}

export const BackendUserRoleSchema = SchemaFactory.createForClass(BackendUserRole);