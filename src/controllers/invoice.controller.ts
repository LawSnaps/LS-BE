import { InvoiceService } from '@app/services/invoice.service';
import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('invoice')
export class InvoiceController {
  constructor(private service: InvoiceService) {}

  @Get('/')
  async getProfile(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<Response> {
    const invoice = await this.service.getAllInvoice();
    return res.status(200).send(invoice);
  }

  @Post('/')
  async create(@Req() req: Request, @Res() res: Response): Promise<Response> {
    const { body, ip } = req;
    const createdInvoice = await this.service.createInvoice(body);
    if (createdInvoice) {
      return res.status(200).send('Invoice Created');
    }
  }
}
