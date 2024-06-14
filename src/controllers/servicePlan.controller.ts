import { ServicePlanService } from '@app/services';
import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('servicePlans')
export class ServicePlanController {
  constructor(private service: ServicePlanService) {}

  @Get('/')
  async getProfile(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<Response> {
    const servicePlan = await this.service.getAllServicePlan();
    return res.status(200).send(servicePlan);
  }

  @Post('/')
  async create(@Req() req: Request, @Res() res: Response): Promise<Response> {
    const { body, ip } = req;
    const createdServicePlan = await this.service.createServicePlan(body, ip);
    if (createdServicePlan) {
      return res.status(200).send('ServicePlan Created');
    }
  }
}
