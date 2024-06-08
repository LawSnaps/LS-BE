import { Schema,Prop, SchemaFactory } from "@nestjs/mongoose";
import { BaseSchema } from "./base.schema";
import { HydratedDocument, Types } from 'mongoose';

export type BackendrolePermissionSchemaDocument =  HydratedDocument<BackendRolePermission>;

@Schema()
export class BackendRolePermission extends BaseSchema {
    @Prop({ type: Types.ObjectId, ref: 'BackendRole', required: true })
    BackEndRoleId:Types.ObjectId
    @Prop({ type: Types.ObjectId, ref: 'BackendPermission', required: true })
    BackEndPermissionId:Types.ObjectId

}

export const BackendRolePermissionSchema = SchemaFactory.createForClass(BackendRolePermission);