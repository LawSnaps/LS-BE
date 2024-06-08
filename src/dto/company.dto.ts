import {
  IsString,
  IsOptional,
  IsEmail,
  IsBoolean,
  IsNumber,
  IsDateString,
  MaxLength,
} from 'class-validator';
import { BaseDTO } from './base.dto';

export class CreateCompanyDto extends BaseDTO {
  @IsString()
  @MaxLength(255)
  organisationName: string;

  @IsString()
  @IsOptional()
  displayName?: string;

  @IsString()
  @IsOptional()
  website?: string;

  @IsString()
  @IsOptional()
  address1?: string;

  @IsString()
  @IsOptional()
  address2?: string;

  @IsString()
  @IsOptional()
  @MaxLength(50)
  city?: string;

  @IsString()
  @IsOptional()
  @MaxLength(50)
  state?: string;

  @IsString()
  @IsOptional()
  @MaxLength(50)
  country?: string;

  @IsString()
  @IsOptional()
  @MaxLength(20)
  zip?: string;

  @IsString()
  @IsOptional()
  @MaxLength(15)
  phone?: string;

  @IsString()
  @IsOptional()
  @MaxLength(60)
  phone1?: string;

  @IsString()
  @IsOptional()
  @MaxLength(15)
  phone2?: string;

  @IsString()
  @IsOptional()
  @MaxLength(20)
  fax?: string;

  @IsEmail()
  @MaxLength(50)
  email: string;

  @IsEmail()
  @MaxLength(50)
  adminEmail: string;

  @IsString()
  @IsOptional()
  @MaxLength(20)
  registrationNo?: string;

  @IsBoolean()
  approved: boolean;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  subDomain?: string;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  mainDomain?: string;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  alternateDomain?: string;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  timeZone?: string;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  industryType?: string;

  @IsString()
  @IsOptional()
  @MaxLength(200)
  source?: string;

  @IsString()
  @IsOptional()
  @MaxLength(200)
  campaign?: string;

  @IsNumber()
  @IsOptional()
  modules?: number;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  subscriptionPlan?: string;

  @IsBoolean()
  @IsOptional()
  pendingInvoices?: boolean;

  @IsString()
  @IsOptional()
  @MaxLength(200)
  refererUrl?: string;

  @IsString()
  @IsOptional()
  @MaxLength(50)
  customDomain?: string;

  @IsBoolean()
  @IsOptional()
  isCustomDomainValid?: boolean;

  @IsDateString()
  @IsOptional()
  domainValidatedOn?: Date;

  @IsNumber()
  @IsOptional()
  companySetup?: number;

  @IsNumber()
  @IsOptional()
  partnerId?: number;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  partnerDomain?: string;

  @IsString()
  @IsOptional()
  @MaxLength(200)
  providerName?: string;
}

export class UpdateCompanyDto extends BaseDTO {
  @IsString()
  @IsOptional()
  @MaxLength(255)
  organisationName?: string;

  @IsString()
  @IsOptional()
  displayName?: string;

  @IsString()
  @IsOptional()
  website?: string;

  @IsString()
  @IsOptional()
  address1?: string;

  @IsString()
  @IsOptional()
  address2?: string;

  @IsString()
  @IsOptional()
  @MaxLength(50)
  city?: string;

  @IsString()
  @IsOptional()
  @MaxLength(50)
  state?: string;

  @IsString()
  @IsOptional()
  @MaxLength(50)
  country?: string;

  @IsString()
  @IsOptional()
  @MaxLength(20)
  zip?: string;

  @IsString()
  @IsOptional()
  @MaxLength(15)
  phone?: string;

  @IsString()
  @IsOptional()
  @MaxLength(60)
  phone1?: string;

  @IsString()
  @IsOptional()
  @MaxLength(15)
  phone2?: string;

  @IsString()
  @IsOptional()
  @MaxLength(20)
  fax?: string;

  @IsEmail()
  @IsOptional()
  @MaxLength(50)
  email?: string;

  @IsEmail()
  @IsOptional()
  @MaxLength(50)
  adminEmail?: string;

  @IsString()
  @IsOptional()
  @MaxLength(20)
  registrationNo?: string;

  @IsBoolean()
  @IsOptional()
  approved?: boolean;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  subDomain?: string;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  mainDomain?: string;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  alternateDomain?: string;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  timeZone?: string;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  industryType?: string;

  @IsString()
  @IsOptional()
  @MaxLength(200)
  source?: string;

  @IsString()
  @IsOptional()
  @MaxLength(200)
  campaign?: string;

  @IsNumber()
  @IsOptional()
  modules?: number;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  subscriptionPlan?: string;

  @IsBoolean()
  @IsOptional()
  pendingInvoices?: boolean;

  @IsString()
  @IsOptional()
  @MaxLength(200)
  refererUrl?: string;

  @IsString()
  @IsOptional()
  @MaxLength(50)
  customDomain?: string;

  @IsBoolean()
  @IsOptional()
  isCustomDomainValid?: boolean;

  @IsDateString()
  @IsOptional()
  domainValidatedOn?: Date;

  @IsNumber()
  @IsOptional()
  companySetup?: number;

  @IsNumber()
  @IsOptional()
  partnerId?: number;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  partnerDomain?: string;

  @IsString()
  @IsOptional()
  @MaxLength(200)
  providerName?: string;
}
