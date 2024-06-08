import { IsString, IsOptional, IsBoolean, MaxLength } from 'class-validator';
import { BaseDTO } from './base.dto';

export class CreateGlobalSettingsDto extends BaseDTO {
  @IsString()
  @IsOptional()
  @MaxLength(50)
  key?: string;

  @IsString()
  @IsOptional()
  value?: string;

  @IsString()
  @IsOptional()
  value2?: string;

  @IsString()
  @IsOptional()
  value3?: string;

  @IsString()
  @IsOptional()
  value4?: string;

  @IsString()
  @IsOptional()
  value5?: string;

  @IsBoolean()
  @IsOptional()
  locked?: boolean;
}

export class UpdateGlobalSettingsDto extends BaseDTO {
  @IsString()
  @IsOptional()
  @MaxLength(50)
  key?: string;

  @IsString()
  @IsOptional()
  value?: string;

  @IsString()
  @IsOptional()
  value2?: string;

  @IsString()
  @IsOptional()
  value3?: string;

  @IsString()
  @IsOptional()
  value4?: string;

  @IsString()
  @IsOptional()
  value5?: string;

  @IsBoolean()
  @IsOptional()
  locked?: boolean;
}
