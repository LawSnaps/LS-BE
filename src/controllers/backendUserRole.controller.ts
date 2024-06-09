import { BackendUserRoleService } from '@app/services';
import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('backendPermissions')
export class BackendUserRoleController {
  constructor(private service: BackendUserRoleService) {}

  @Get('/')
  async getProfile(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<Response> {
    const backendPermission = await this.service.getAllBackendUserRole();
    return res.status(200).send(backendPermission);
  }

  @Post('/')
  async create(@Req() req: Request, @Res() res: Response): Promise<Response> {
    const { body } = req;
    const createdBackendUserRole =
      await this.service.createBackendUserRole(body);
    if (createdBackendUserRole) {
      return res.status(200).send('BackendUserRole Created');
    }
  }
}
