import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InvoiceItemController } from '@app/controllers/invoiceItem.controller';
import { InvoiceItemService } from '@app/services';
import {
  InvoiceItem,
  InvoiceItemSchema,
} from '@app/schemas/invoiceItem.schema';
import { InvoiceItemRepository } from '@app/repositories';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: InvoiceItem.name, schema: InvoiceItemSchema },
    ]),
  ],
  controllers: [InvoiceItemController],
  providers: [
    InvoiceItemService,
    { provide: 'invoiceItemModule', useClass: InvoiceItemRepository },
  ],
})
export class InvoiceItemModule {}
