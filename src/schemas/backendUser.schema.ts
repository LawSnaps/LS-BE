import { Schema,Prop, SchemaFactory } from "@nestjs/mongoose";
import { BaseSchema } from "./base.schema";
import { HydratedDocument } from 'mongoose';

export type BackendUserSchemaDocument =  HydratedDocument<BackendUser>;

@Schema()
export class BackendUser extends BaseSchema {
    @Prop({ required: true, type: String, maxlength: 50 })
    username: string;
  
    @Prop({ type: String, maxlength: 50 })
    password: string;
  
    @Prop({ type: String, maxlength: 20 })
    name: string;
  
    @Prop({ type: String, maxlength: 50 })
    email: string;
  
    @Prop({ type: Number, default: null })
    permissions: number;
  
    @Prop({ type: Number, default: null })
    role: number;

}

export const BackendUserSchema = SchemaFactory.createForClass(BackendUser);