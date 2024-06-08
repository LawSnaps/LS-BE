import { Company, CompanyDocument } from '@app/schemas/company.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from './base.repository';

@Injectable()
export class CompanyRepository extends BaseRepository<CompanyDocument> {
  constructor(
    @InjectModel(Company.name) private companyModel: Model<CompanyDocument>,
  ) {
    super(companyModel);
  }
}
