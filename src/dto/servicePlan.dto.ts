import { IsString, IsOptional, IsNumber, IsBoolean, IsDecimal, MaxLength } from 'class-validator';

export class CreateServicePlanDto {
    @IsString()
    @MaxLength(50)
    name: string;

    @IsNumber()
    @IsOptional()
    employees?: number;

    @IsNumber()
    @IsOptional()
    jobs?: number;

    @IsString()
    @IsOptional()
    @MaxLength(50)
    dbSize?: string;

    @IsNumber()
    companyId: number;

    @IsBoolean()
    isCustomized: boolean;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    @MaxLength(50)
    paymentCycle: string;

    @IsDecimal()
    discount: number;

    @IsDecimal()
    amount: number;

    @IsString()
    @MaxLength(50)
    currency: string;

    @IsString()
    @IsOptional()
    notes?: string;

    @IsString()
    @IsOptional()
    @MaxLength(100)
    type?: string;

    @IsNumber()
    @IsOptional()
    partnerId?: number;

    @IsString()
    @IsOptional()
    @MaxLength(50)
    taxType?: string;
}

export class UpdateServicePlanDto {
    @IsString()
    @IsOptional()
    @MaxLength(50)
    name?: string;

    @IsNumber()
    @IsOptional()
    employees?: number;

    @IsNumber()
    @IsOptional()
    jobs?: number;

    @IsString()
    @IsOptional()
    @MaxLength(50)
    dbSize?: string;

    @IsNumber()
    @IsOptional()
    companyId?: number;

    @IsBoolean()
    @IsOptional()
    isCustomized?: boolean;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    @IsOptional()
    @MaxLength(50)
    paymentCycle?: string;

    @IsDecimal()
    @IsOptional()
    discount?: number;

    @IsDecimal()
    @IsOptional()
    amount?: number;

    @IsString()
    @IsOptional()
    @MaxLength(50)
    currency?: string;

    @IsString()
    @IsOptional()
    notes?: string;

    @IsString()
    @IsOptional()
    @MaxLength(100)
    type?: string;

    @IsNumber()
    @IsOptional()
    partnerId?: number;

    @IsString()
    @IsOptional()
    @MaxLength(50)
    taxType?: string;
}
