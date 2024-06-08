import { Types } from 'mongoose';
import { BaseDTO } from './base.dto';

export class CreateInvoiceTransactionDto extends BaseDTO {
  invoiceId: Types.ObjectId;
  transactionNumber?: string;
  amount?: number;
  transactionDate?: Date;
  paymentMode?: string;
  responseTime?: Date;
  responseCode?: string;
  responseMessage?: string;
  status?: string;
  currency?: string;
  referenceNumber?: string;
  value1?: string;
  value2?: string;
  notes?: string;
}
