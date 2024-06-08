import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class BaseSchema extends Document {
  @Prop({ require: true })
  createdOn: Date;

  @Prop({ require: true })
  createdBy: string;

  @Prop({ require: true })
  updatedOn: Date;

  @Prop({ require: true })
  updatedBy: string;

  @Prop({ require: false })
  ipAddress?: string;
}
