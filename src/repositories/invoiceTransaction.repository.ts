import { InvoiceTransaction, InvoiceTransactionSchemaDocument } from "@app/schemas/invoiceTransaction.schema";
import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BaseRepository } from "./base.repository";

@Injectable()
export class InvoiceTransactionRepository extends BaseRepository<InvoiceTransactionSchemaDocument> {
    constructor(@InjectModel(InvoiceTransaction.name) private invoiceTransactionModel: Model<InvoiceTransactionSchemaDocument>) {
        super(invoiceTransactionModel)
     }
}
