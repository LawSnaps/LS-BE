import { Types } from "mongoose";
import { BaseDTO } from "./base.dto";

export class CreateInvoiceItemDto extends BaseDTO {
  name: string;
  description?: string;
  amount: number;
  discount?: number;
  tax?: number;
  finalAmount: number;
  invoiceId: number;
  servicePlanId?: number;
  subscriptionId?: Types.ObjectId;
}