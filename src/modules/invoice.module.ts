import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InvoiceController } from '@app/controllers/invoice.controller';
import { InvoiceService } from '@app/services/invoice.service';
import { Invoice, InvoiceSchema } from '@app/schemas/invoice.schema';
import { InvoiceRepository } from '@app/repositories/invoice.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Invoice.name, schema: InvoiceSchema }]),
  ],
  controllers: [InvoiceController],
  providers: [
    InvoiceService,
    { provide: 'invoiceModule', useClass: InvoiceRepository },
  ],
})
export class InvoiceModule {}
