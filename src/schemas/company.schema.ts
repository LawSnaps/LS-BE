import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { BaseSchema } from './base.schema';

export type CompanyDocument = HydratedDocument<Company>;

@Schema()
export class Company extends BaseSchema {
  @Prop({ required: true })
  organisationName: string;

  @Prop()
  displayName: string;

  @Prop()
  website: string;

  @Prop()
  address1: string;

  @Prop()
  address2: string;

  @Prop({ maxlength: 50 })
  city: string;

  @Prop({ maxlength: 50 })
  state: string;

  @Prop({ maxlength: 50 })
  country: string;

  @Prop({ maxlength: 20 })
  zip: string;

  @Prop({ maxlength: 15 })
  phone: string;

  @Prop({ maxlength: 60 })
  phone1: string;

  @Prop({ maxlength: 15 })
  phone2: string;

  @Prop({ maxlength: 20 })
  fax: string;

  @Prop({ required: true, maxlength: 50 })
  email: string;

  @Prop({ required: true, maxlength: 50 })
  adminEmail: string;

  @Prop({ maxlength: 20 })
  registrationNo: string;

  @Prop({ required: true })
  approved: boolean;

  @Prop({ default: false })
  isActive: boolean;

  @Prop({ maxlength: 100 })
  subDomain: string;

  @Prop({ maxlength: 100 })
  mainDomain: string;

  @Prop({ maxlength: 100 })
  alternateDomain: string;

  @Prop({ maxlength: 100 })
  timeZone: string;

  @Prop({ maxlength: 100 })
  industryType: string;

  @Prop({ maxlength: 200 })
  source: string;

  @Prop({ maxlength: 200 })
  campaign: string;

  @Prop()
  modules: number;

  @Prop({ maxlength: 100 })
  subscriptionPlan: string;

  @Prop()
  pendingInvoices: boolean;

  @Prop({ maxlength: 200 })
  refererUrl: string;

  @Prop({ maxlength: 50 })
  customDomain: string;

  @Prop()
  isCustomDomainValid: boolean;

  @Prop()
  domainValidatedOn: Date;

  @Prop()
  companySetup: number;

  @Prop()
  partnerId: number;

  @Prop({ maxlength: 100 })
  partnerDomain: string;

  @Prop({ maxlength: 200 })
  providerName: string;
}

export const CompanySchema = SchemaFactory.createForClass(Company);
