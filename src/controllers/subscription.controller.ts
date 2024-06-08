import { SubscriptionService } from '@app/services/subscription.service';
import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('subscription')
export class SubscriptionController {
  constructor(private service: SubscriptionService) {}

  @Get('/')
  async getProfile(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<Response> {
    const subscription = await this.service.getAllSubscription();
    return res.status(200).send(subscription);
  }

  @Post('/')
  async create(@Req() req: Request, @Res() res: Response): Promise<Response> {
    const { body } = req;
    const createdSubscription = await this.service.createSubscription(body);
    if (createdSubscription) {
      return res.status(200).send('Subscription Created');
    }
  }
}
