import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanyController } from '@app/controllers/company.controller';
import { CompanyService } from '@app/services';
import { Company, CompanySchema } from '@app/schemas/company.schema';
import { CompanyRepository } from '@app/repositories';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Company.name, schema: CompanySchema }]),
  ],
  controllers: [CompanyController],
  providers: [
    CompanyService,
    { provide: 'companyModule', useClass: CompanyRepository },
  ],
})
export class CompanyModule {}
