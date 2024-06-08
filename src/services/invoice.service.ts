import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class InvoiceService {
  constructor(@Inject('invoiceModule') private invoice) {}

  async getAllInvoice(): Promise<Record<string, any>> {
    return this.invoice.findAll();
  }

  async createInvoice(invoiceDetails): Promise<Record<string, any>> {
    const payload = {
      createdAt: new Date(),
      createdBy: 'system',
      updatedAt: new Date(),
      updatedBy: 'system',
      ...invoiceDetails,
    };
    return this.invoice.create(payload);
  }
}
