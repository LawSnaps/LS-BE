import { CompanyService } from '@app/services/company.service';
import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('company')
export class CompanyController {
  constructor(private service: CompanyService) {}

  @Get('/')
  async getProfile(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<Response> {
    const company = await this.service.getAllCompany();
    return res.status(200).send(company);
  }

  @Post('/')
  async create(@Req() req: Request, @Res() res: Response): Promise<Response> {
    const { body, ip } = req;
    const createdCompany = await this.service.createCompany(body, ip);
    if (createdCompany) {
      return res.status(200).send('Company Created');
    }
  }
}
