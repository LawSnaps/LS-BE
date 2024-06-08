import { Types } from 'mongoose';
import { BaseDTO } from './base.dto';

export class CreateInvoiceDto extends BaseDTO {
  companyId: Types.ObjectId;
  invoiceId: Types.ObjectId;
  subscriptionId?: Types.ObjectId;
  subscriptionCreated?: number;
  amount: number;
  currency?: string;
  tax?: number;
  discount?: number;
  finalAmount: number;
  paymentMode: string;
  status: number;
  paymentDate?: Date;
  invoiceNumber: string;
  invoiceDate: Date;
  payByDate: Date;
  partnerId?: number;
}
