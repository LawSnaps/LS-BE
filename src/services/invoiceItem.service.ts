import { Inject, Injectable } from "@nestjs/common";


@Injectable()
export class InvoiceItemService {
    constructor(
    @Inject('invoiceItemModule') private invoiceItem,
  ){}

 async getAllInvoiceItem() : Promise<Record<string,any>> {
    return this.invoiceItem.findAll();
 }

 async createInvoiceItem(invoiceItemDetails) : Promise<Record<string,any>>{
   const payload ={
      createdAt:new Date(),
      createdBy: 'system',
      updatedAt:new Date(),
      updatedBy: 'system',
      ...invoiceItemDetails
   }
   return this.invoiceItem.create(payload);
 }
}
