import { Invoice, InvoiceSchemaDocument } from "@app/schemas/invoice.schema";
import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BaseRepository } from "./base.repository";

@Injectable()
export class InvoiceRepository extends BaseRepository<InvoiceSchemaDocument> {
    constructor(@InjectModel(Invoice.name) private invoiceModel: Model<InvoiceSchemaDocument>) {
        super(invoiceModel)
     }
}
