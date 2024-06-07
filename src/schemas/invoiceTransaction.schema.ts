import { Schema,Prop, SchemaFactory } from "@nestjs/mongoose";
import { BaseSchema } from "./base.schema";
import { HydratedDocument, Types } from 'mongoose';

export type InvoiceTransactionSchemaDocument =  HydratedDocument<InvoiceTransaction>;

@Schema()
export class InvoiceTransaction extends BaseSchema {
  @Prop({ required: true })
  invoiceId: number;

  @Prop({ type: String, maxlength: 50 })
  transactionNumber?: string;

  @Prop({ type: Number })
  amount?: number;

  @Prop()
  transactionDate?: Date;

  @Prop({ type: String, maxlength: 50 })
  paymentMode?: string;

  @Prop()
  responseTime?: Date;

  @Prop({ type: String, maxlength: 50 })
  responseCode?: string;

  @Prop({ type: String, maxlength: 100 })
  responseMessage?: string;

  @Prop({ type: String, maxlength: 50 })
  status?: string;

  @Prop({ type: String, maxlength: 50 })
  currency?: string;

  @Prop({ type: String, maxlength: 100 })
  referenceNumber?: string;

  @Prop({ type: String, maxlength: 100 })
  value1?: string;

  @Prop({ type: String, maxlength: 100 })
  value2?: string;

  @Prop({ type: String })
  notes?: string;
}

export const InvoiceTransactionSchema = SchemaFactory.createForClass(InvoiceTransaction);