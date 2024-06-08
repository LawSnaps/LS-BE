import {
  IsString,
  IsOptional,
  IsNumber,
  IsBoolean,
  IsDecimal,
  MaxLength,
} from 'class-validator';
import { BaseDTO } from './base.dto';

export class CreateMembershipDto extends BaseDTO {
  @IsString()
  @IsOptional()
  @MaxLength(100)
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsOptional()
  numberOfEmployee?: number;

  @IsNumber()
  @IsOptional()
  numberOfJobPosted?: number;

  @IsString()
  @IsOptional()
  @MaxLength(50)
  companySize?: string;

  @IsBoolean()
  @IsOptional()
  advertisement?: boolean;

  @IsBoolean()
  @IsOptional()
  customization?: boolean;

  @IsDecimal()
  @IsOptional()
  yearlyINR?: number;

  @IsDecimal()
  @IsOptional()
  yearly1?: number;

  @IsDecimal()
  @IsOptional()
  yearly2?: number;

  @IsDecimal()
  @IsOptional()
  yearly3?: number;

  @IsDecimal()
  @IsOptional()
  monthlyINR?: number;

  @IsDecimal()
  @IsOptional()
  monthly1?: number;

  @IsDecimal()
  @IsOptional()
  monthly2?: number;

  @IsDecimal()
  @IsOptional()
  monthly3?: number;

  @IsNumber()
  @IsOptional()
  displayOrder?: number;

  @IsNumber()
  @IsOptional()
  monthlyFreeSMS?: number;

  @IsNumber()
  @IsOptional()
  yearlyFreeSMS?: number;

  @IsNumber()
  @IsOptional()
  monthlyCredit?: number;

  @IsNumber()
  @IsOptional()
  yearlyCredit?: number;
}

export class UpdateMembershipDto extends BaseDTO {
  @IsString()
  @IsOptional()
  @MaxLength(100)
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsOptional()
  numberOfEmployee?: number;

  @IsNumber()
  @IsOptional()
  numberOfJobPosted?: number;

  @IsString()
  @IsOptional()
  @MaxLength(50)
  companySize?: string;

  @IsBoolean()
  @IsOptional()
  advertisement?: boolean;

  @IsBoolean()
  @IsOptional()
  customization?: boolean;

  @IsDecimal()
  @IsOptional()
  yearlyINR?: number;

  @IsDecimal()
  @IsOptional()
  yearly1?: number;

  @IsDecimal()
  @IsOptional()
  yearly2?: number;

  @IsDecimal()
  @IsOptional()
  yearly3?: number;
  @IsDecimal()
  @IsOptional()
  monthlyINR?: number;

  @IsDecimal()
  @IsOptional()
  monthly1?: number;

  @IsDecimal()
  @IsOptional()
  monthly2?: number;

  @IsDecimal()
  @IsOptional()
  monthly3?: number;

  @IsNumber()
  @IsOptional()
  displayOrder?: number;

  @IsNumber()
  @IsOptional()
  monthlyFreeSMS?: number;

  @IsNumber()
  @IsOptional()
  yearlyFreeSMS?: number;

  @IsNumber()
  @IsOptional()
  monthlyCredit?: number;

  @IsNumber()
  @IsOptional()
  yearlyCredit?: number;
}
