import { RolesService } from '@app/services';
import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('roles')
export class RolesController {
  constructor(private service: RolesService) {}

  @Get('/')
  async getProfile(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<Response> {
    const roles = await this.service.getAllRoles();
    return res.status(200).send(roles);
  }

  @Post('/')
  async create(@Req() req: Request, @Res() res: Response): Promise<Response> {
    const { body, ip } = req;
    const createdRoles = await this.service.createRoles(body, ip);
    if (createdRoles) {
      return res.status(200).send('Roles Created');
    }
  }
}
