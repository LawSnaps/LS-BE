import { Schema,Prop, SchemaFactory } from "@nestjs/mongoose";
import { BaseSchema } from "./base.schema";
import { HydratedDocument, Types } from 'mongoose';

export type InvoiceSchemaDocument =  HydratedDocument<Invoice>;

@Schema()
export class Invoice extends BaseSchema {
  @Prop({ type: Types.ObjectId, ref: 'Company', required: true })
  companyId: number;

  @Prop({ required: true })
  invoiceId: number;

  @Prop()
  subscriptionId?: number;

  @Prop()
  subscriptionCreated?: number;

  @Prop({ required: true, type: Number })
  amount: number;

  @Prop({ type: String, maxlength: 50 })
  currency?: string;

  @Prop({ type: Number })
  tax?: number;

  @Prop({ type: Number })
  discount?: number;

  @Prop({ required: true, type: Number })
  finalAmount: number;

  @Prop({ required: true, type: String, maxlength: 50 })
  paymentMode: string;

  @Prop({ required: true })
  status: number;

  @Prop()
  paymentDate?: Date;

  @Prop({ required: true, type: String, maxlength: 50 })
  invoiceNumber: string;

  @Prop({ required: true })
  invoiceDate: Date;

  @Prop({ required: true })
  payByDate: Date;

  @Prop()
  partnerId?: number;
}

export const InvoiceSchema = SchemaFactory.createForClass(Invoice);