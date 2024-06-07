import { Schema,Prop, SchemaFactory } from "@nestjs/mongoose";
import { BaseSchema } from "./base.schema";
import { HydratedDocument } from 'mongoose';

export type BackendrolePermissionSchemaDocument =  HydratedDocument<BackendRolePermission>;

@Schema()
export class BackendRolePermission extends BaseSchema {
    @Prop({require:true})
    BackEndRoleId:Number
    @Prop({require:true})
    BackEndPermissionId:Number

}

export const BackendRolePermissionSchema = SchemaFactory.createForClass(BackendRolePermission);