import { Schema,Prop, SchemaFactory } from "@nestjs/mongoose";
import { BaseSchema } from "./base.schema";
import { HydratedDocument } from 'mongoose';

export type BackenduserPermissionSchemaDocument =  HydratedDocument<BackendUserPermission>;

@Schema()
export class BackendUserPermission extends BaseSchema {
    @Prop({require:true})
    BackEndPermissionId:Number
    @Prop({require:true})
    BackEndUserId:Number

}

export const BackendUserPermissionSchema = SchemaFactory.createForClass(BackendUserPermission);