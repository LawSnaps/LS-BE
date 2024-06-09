import { BackendRolePermissionService } from '@app/services';
import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('backendRolePermission')
export class BackendRolePermissionController {
  constructor(private service: BackendRolePermissionService) {}

  @Get('/')
  async getProfile(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<Response> {
    const rolePermission = await this.service.getAllBackendRolePermission();
    return res.status(200).send(rolePermission);
  }

  @Post('/')
  async create(@Req() req: Request, @Res() res: Response): Promise<Response> {
    const { body } = req;
    const createRolePermission =
      await this.service.createBackendRolePermission(body);
    if (createRolePermission) {
      return res.status(200).send('Backend Role Permission created');
    }
  }
}
