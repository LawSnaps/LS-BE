import { Types } from 'mongoose';
import { BaseDTO } from './base.dto';

export class CreateSubscriptionDto extends BaseDTO {
  companyId: Types.ObjectId;
  description?: string;
  serviceType?: string;
  employees?: number;
  jobs?: number;
  dbSize?: string;
  isCustomized?: number;
  startDate: Date;
  endDate: Date;
  status: number;
  type?: string;
  servicePlanId?: Types.ObjectId;
  partnerId?: number;
}
