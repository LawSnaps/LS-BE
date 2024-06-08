import { CreateServicePlanDto } from '@app/dto/servicePlan.dto';
import {
  ServicePlan,
  ServicePlanDocument,
} from '@app/schemas/servicePlan.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from './base.repository';

@Injectable()
export class ServicePlanRepository extends BaseRepository<ServicePlanDocument> {
  constructor(
    @InjectModel(ServicePlan.name)
    private servicePlanModel: Model<ServicePlanDocument>,
  ) {
    super(servicePlanModel);
  }
}
