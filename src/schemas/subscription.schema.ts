import { Schema,Prop, SchemaFactory } from "@nestjs/mongoose";
import { BaseSchema } from "./base.schema";
import { HydratedDocument, Types } from 'mongoose';

export type SubscriptionSchemaDocument =  HydratedDocument<Subscription>;

@Schema()
export class Subscription extends BaseSchema {
  @Prop({ type: Types.ObjectId, ref: 'Company', required: true })
  companyId: number;

  @Prop({ type: String })
  description?: string;

  @Prop({ type: String, maxlength: 50 })
  serviceType?: string;

  @Prop({ type: Number })
  employees?: number;

  @Prop({ type: Number })
  jobs?: number;

  @Prop({ type: String, maxlength: 50 })
  dbSize?: string;

  @Prop({ type: Number })
  isCustomized?: number;

  @Prop({ required: true })
  startDate: Date;

  @Prop({ required: true })
  endDate: Date;

  @Prop({ required: true })
  status: number;

  @Prop({ type: String, maxlength: 100 })
  type?: string;

  @Prop({ type: Number })
  servicePlanId?: number;

  @Prop({ type: Number })
  partnerId?: number;
}

export const SubscriptionSchema = SchemaFactory.createForClass(Subscription);