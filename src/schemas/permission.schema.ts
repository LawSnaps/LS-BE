import { Schema,Prop, SchemaFactory } from "@nestjs/mongoose";
import { BaseSchema } from "./base.schema";
import { HydratedDocument, Types } from 'mongoose';

export type PermissionSchemaDocument =  HydratedDocument<Permission>;

@Schema()
export class Permission extends BaseSchema {
    @Prop({ type: String, maxlength: 100, default: null })
    public name?: string;
  
    @Prop({ type: String, maxlength: 500, default: null })
    public description?: string;
}

export const PermissionSchema = SchemaFactory.createForClass(Permission);