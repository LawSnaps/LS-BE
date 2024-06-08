import { PermissionService } from "@app/services/permission.service";
import { Controller, Get, Post, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";

@Controller('permission')
export class PermissionController {
  constructor(private service: PermissionService) {
  }

  @Get('/')
  async getProfile(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<Response> {
    const permission = await this.service.getAllPermission();
    return res.status(200).send(permission);
  }

  @Post('/')
  async create(
    @Req() req: Request,
    @Res() res: Response
  ): Promise<Response> {
    const { body, ip } = req;
    const createdPermission = await this.service.createPermission(body)
    if (createdPermission) {
      return res.status(200).send("Permission Created")
    }
  }
}
