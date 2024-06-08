import { GlobalSettingsService } from "@app/services/globalSettings.service";
import { Controller, Get, Post, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";

@Controller('globalSettings')
export class GlobalSettingsController {
  constructor(private service: GlobalSettingsService) {
  }

  @Get('/')
  async getProfile(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<Response> {
    const globalSettings = await this.service.getAllGlobalSettings();
    return res.status(200).send(globalSettings);
  }

  @Post('/')
  async create(
    @Req() req: Request,
    @Res() res: Response
  ): Promise<Response> {
    const { body, ip } = req;
    const createdGlobalSettings = await this.service.createGlobalSettings(body, ip)
    if (createdGlobalSettings) {
      return res.status(200).send("GlobalSettings Created")
    }
  }
}
