import { InvoiceItemService } from "@app/services/invoiceItem.service";
import { Controller, Get, Post, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";

@Controller('invoiceItem')
export class InvoiceItemController {
  constructor(private service: InvoiceItemService) {
  }

  @Get('/')
  async getProfile(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<Response> {
    const invoiceItem = await this.service.getAllInvoiceItem();
    return res.status(200).send(invoiceItem);
  }

  @Post('/')
  async create(
    @Req() req: Request,
    @Res() res: Response
  ): Promise<Response> {
    const { body, ip } = req;
    const createdInvoiceItem = await this.service.createInvoiceItem(body)
    if (createdInvoiceItem) {
      return res.status(200).send("InvoiceItem Created")
    }
  }
}
