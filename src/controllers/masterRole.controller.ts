import { MasterRoleService } from '@app/services/masterRole.service';
import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('masterRole')
export class MasterRoleController {
  constructor(private service: MasterRoleService) {}

  @Get('/')
  async getProfile(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<Response> {
    const masterRole = await this.service.getAllMasterRole();
    return res.status(200).send(masterRole);
  }

  @Post('/')
  async create(@Req() req: Request, @Res() res: Response): Promise<Response> {
    const { body, ip } = req;
    const createdMasterRole = await this.service.createMasterRole(body);
    if (createdMasterRole) {
      return res.status(200).send('MasterRole Created');
    }
  }
}
