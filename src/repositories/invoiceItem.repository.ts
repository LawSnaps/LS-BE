import {
  InvoiceItem,
  InvoiceItemSchemaDocument,
} from '@app/schemas/invoiceItem.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from './base.repository';

@Injectable()
export class InvoiceItemRepository extends BaseRepository<InvoiceItemSchemaDocument> {
  constructor(
    @InjectModel(InvoiceItem.name)
    private invoiceItemModel: Model<InvoiceItemSchemaDocument>,
  ) {
    super(invoiceItemModel);
  }
}
