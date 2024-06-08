import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class InvoiceTransactionService {
  constructor(@Inject('invoiceTransactionModule') private invoiceTransaction) {}

  async getAllInvoiceTransaction(): Promise<Record<string, any>> {
    return this.invoiceTransaction.findAll();
  }

  async createInvoiceTransaction(
    invoiceTransactionDetails,
  ): Promise<Record<string, any>> {
    const payload = {
      createdAt: new Date(),
      createdBy: 'system',
      updatedAt: new Date(),
      updatedBy: 'system',
      ...invoiceTransactionDetails,
    };
    return this.invoiceTransaction.create(payload);
  }
}
