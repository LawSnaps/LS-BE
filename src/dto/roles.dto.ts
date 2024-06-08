import {
  IsString,
  IsOptional,
  IsNumber,
  IsDateString,
  MaxLength,
} from 'class-validator';
import { BaseDTO } from './base.dto';

export class CreateRolesDto extends BaseDTO {
  @IsNumber()
  @IsOptional()
  companyId?: number;

  @IsString()
  @IsOptional()
  @MaxLength(50)
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsOptional()
  bcode?: number;
}

export class UpdateRolesDto extends BaseDTO {
  @IsNumber()
  @IsOptional()
  companyId?: number;

  @IsString()
  @IsOptional()
  @MaxLength(50)
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsOptional()
  bcode?: number;
}
