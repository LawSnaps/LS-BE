import { Inject, Injectable } from "@nestjs/common";


@Injectable()
export class CompanyService {
    constructor(
        @Inject('companyModule') private company,
    ) { }

    async getAllCompany(): Promise<Record<string, any>> {
        return this.company.findAll();
    }

    async createCompany(companyDetails, ipAddress: string): Promise<Record<string, any>> {
        const payload = {
            createdAt: new Date(),
            createdBy: 'system',
            updatedAt: new Date(),
            updatedBy: 'system',
            ipAddress: ipAddress,
            ...companyDetails
        }
        return this.company.create(payload);
    }
}
