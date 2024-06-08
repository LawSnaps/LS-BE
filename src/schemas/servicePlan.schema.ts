import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { BaseSchema } from './base.schema';
export type ServicePlanDocument = HydratedDocument<ServicePlan>;

@Schema()
export class ServicePlan extends BaseSchema {
  @Prop({ required: true, maxlength: 50 })
  name: string;

  @Prop()
  employees: number;

  @Prop()
  jobs: number;

  @Prop({ maxlength: 50 })
  dbSize: string;

  @Prop({ required: true })
  companyId: number;

  @Prop({ required: true })
  isCustomized: boolean;

  @Prop()
  description: string;

  @Prop({ required: true, maxlength: 50 })
  paymentCycle: string;

  @Prop({ required: true, type: Types.Decimal128 })
  discount: number;

  @Prop({ required: true, type: Types.Decimal128 })
  amount: number;

  @Prop({ required: true, maxlength: 50 })
  currency: string;

  @Prop()
  notes: string;

  @Prop({ maxlength: 100 })
  type: string;

  @Prop()
  partnerId: number;

  @Prop({ maxlength: 50 })
  taxType: string;
}

export const ServicePlanSchema = SchemaFactory.createForClass(ServicePlan);
