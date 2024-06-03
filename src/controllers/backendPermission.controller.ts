import { BackendPermissionService } from "@app/services/backendPermission.service";
import { Controller, Get, Post, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";

@Controller('backendPermissions')
export class BackendPermissionController {
  constructor(private service: BackendPermissionService) {
  }

  @Get('/')
  async getProfile(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<Response> {
    const backendPermission = await this.service.getAllBackendPermission();
    return res.status(200).send(backendPermission);
  }

  @Post('/')
  async create(
    @Req() req: Request,
    @Res() res: Response
  ): Promise<Response> {
    const { body, ip } = req;
    const createdBackendPermission = await this.service.createBackendPermission(body, ip)
    if (createdBackendPermission) {
      return res.status(200).send("BackendPermission Created")
    }
  }
}
