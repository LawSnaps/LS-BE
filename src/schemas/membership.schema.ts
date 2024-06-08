import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { BaseSchema } from './base.schema';

export type MembershipDocument = HydratedDocument<Membership>;

@Schema()
export class Membership extends BaseSchema {
  @Prop({ maxlength: 100 })
  name: string;

  @Prop()
  description: string;

  @Prop()
  numberOfEmployee: number;

  @Prop()
  numberOfJobPosted: number;

  @Prop({ maxlength: 50 })
  companySize: string;

  @Prop()
  advertisement: boolean;

  @Prop()
  customization: boolean;

  @Prop({ type: Types.Decimal128 })
  yearlyINR: number;

  @Prop({ type: Types.Decimal128 })
  yearly1: number;

  @Prop({ type: Types.Decimal128 })
  yearly2: number;

  @Prop({ type: Types.Decimal128 })
  yearly3: number;

  @Prop({ type: Types.Decimal128 })
  monthlyINR: number;

  @Prop({ type: Types.Decimal128 })
  monthly1: number;

  @Prop({ type: Types.Decimal128 })
  monthly2: number;

  @Prop({ type: Types.Decimal128 })
  monthly3: number;

  @Prop()
  displayOrder: number;

  @Prop()
  monthlyFreeSMS: number;

  @Prop()
  yearlyFreeSMS: number;

  @Prop()
  monthlyCredit: number;

  @Prop()
  yearlyCredit: number;
}

export const MembershipSchema = SchemaFactory.createForClass(Membership);
