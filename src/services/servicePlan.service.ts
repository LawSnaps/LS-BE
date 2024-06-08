import { Inject, Injectable } from "@nestjs/common";


@Injectable()
export class ServicePlanService {
    constructor(
        @Inject('servicePlanModule') private servicePlan,
    ) { }

    async getAllServicePlan(): Promise<Record<string, any>> {
        return this.servicePlan.findAll();
    }

    async createServicePlan(servicePlanDetails, ipAddress: string): Promise<Record<string, any>> {
        const payload = {
            createdAt: new Date(),
            createdBy: 'system',
            updatedAt: new Date(),
            updatedBy: 'system',
            ipAddress: ipAddress,
            ...servicePlanDetails
        }
        return this.servicePlan.create(payload);
    }
}
