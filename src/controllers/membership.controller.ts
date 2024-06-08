import { MembershipService } from '@app/services/membership.service';
import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('membership')
export class MembershipController {
  constructor(private service: MembershipService) {}

  @Get('/')
  async getProfile(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<Response> {
    const membership = await this.service.getAllMembership();
    return res.status(200).send(membership);
  }

  @Post('/')
  async create(@Req() req: Request, @Res() res: Response): Promise<Response> {
    const { body, ip } = req;
    const createdMembership = await this.service.createMembership(body, ip);
    if (createdMembership) {
      return res.status(200).send('Membership Created');
    }
  }
}
