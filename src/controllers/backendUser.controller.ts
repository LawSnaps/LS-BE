import { BackendUserService } from '@app/services';
import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('backendUser')
export class BackendUserController {
  constructor(private service: BackendUserService) {}

  @Get('/')
  async getProfile(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<Response> {
    const user = await this.service.getAllBackendUser();
    return res.status(200).send(user);
  }

  @Post('/')
  async create(@Req() req: Request, @Res() res: Response): Promise<Response> {
    const { body } = req;
    const createdEmp = await this.service.createBackendUser(body);
    if (createdEmp) {
      return res.status(200).send('BackendUser Created');
    }
  }
}
