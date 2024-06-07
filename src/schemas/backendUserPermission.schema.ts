import { Schema,Prop, SchemaFactory } from "@nestjs/mongoose";
import { BaseSchema } from "./base.schema";
import { HydratedDocument, Types } from 'mongoose';

export type BackenduserPermissionSchemaDocument =  HydratedDocument<BackendUserPermission>;

@Schema()
export class BackendUserPermission extends BaseSchema {
    @Prop({ type: Types.ObjectId, ref: 'BackendPermission', required: true })
    backendPermissionId: Types.ObjectId;

    @Prop({ type: Types.ObjectId, ref: 'BackendUser', required: true })
    backendUserId: Types.ObjectId;

}

export const BackendUserPermissionSchema = SchemaFactory.createForClass(BackendUserPermission);