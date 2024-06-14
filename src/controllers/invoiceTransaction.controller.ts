import { InvoiceTransactionService } from '@app/services';
import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('invoiceTransaction')
export class InvoiceTransactionController {
  constructor(private service: InvoiceTransactionService) {}

  @Get('/')
  async getProfile(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<Response> {
    const invoiceTransaction = await this.service.getAllInvoiceTransaction();
    return res.status(200).send(invoiceTransaction);
  }

  @Post('/')
  async create(@Req() req: Request, @Res() res: Response): Promise<Response> {
    const { body } = req;
    const createdInvoiceTransaction =
      await this.service.createInvoiceTransaction(body);
    if (createdInvoiceTransaction) {
      return res.status(200).send('InvoiceTransaction Created');
    }
  }
}
