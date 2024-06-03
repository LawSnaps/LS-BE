import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { BaseSchema } from "./base.schema";
import { HydratedDocument } from 'mongoose';


export type BackendPermissionSchemaDocument = HydratedDocument<BackendPermission>;

@Schema()
export class BackendPermission extends BaseSchema {
    @Prop({ require: true })
    name: string
    @Prop({ require: true })
    bcode: number
    @Prop({ require: true, maxlength: 200 })
    description: string
}

export const BackendPermissionSchema = SchemaFactory.createForClass(BackendPermission);