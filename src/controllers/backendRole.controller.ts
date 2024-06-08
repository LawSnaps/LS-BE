import { BackendRoleService } from "@app/services/backendRole.service";
import { Controller, Get, Post, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";

@Controller('backendRole')
export class BackendRoleController {
  constructor(private service: BackendRoleService) {
  }

  @Get('/')
  async getProfile(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<Response> {
    const backendRole = await this.service.getAllBackendRole();
    return res.status(200).send(backendRole);
  }

  @Post('/')
  async create(
    @Req() req: Request,
    @Res() res: Response
  ): Promise<Response> {
    const { body, ip } = req;
    const createdBackendRole = await this.service.createBackendRole(body, ip)
    if (createdBackendRole) {
      return res.status(200).send("BackendRole Created")
    }
  }
}
