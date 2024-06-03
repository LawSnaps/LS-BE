import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { BaseSchema } from "./base.schema";
import { HydratedDocument } from 'mongoose';


export type BackendRoleSchemaDocument = HydratedDocument<BackendRole>;

@Schema()
export class BackendRole extends BaseSchema {
    @Prop({ require: true })
    name: string
    @Prop({ require: true })
    bcode: number
    @Prop({ require: true, maxlength: 50 })
    description: string
}

export const BackendRoleSchema = SchemaFactory.createForClass(BackendRole);