import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Document } from 'mongoose';

@Schema()
export class BaseSchema extends Document {
    @Prop({ require: true })
    createdOn: Date;

    @Prop({ require: true })
    createdBy: String;

    @Prop({ require: true })
    updatedOn: Date;

    @Prop({ require: true })
    updatedBy: String;

    @Prop({ require: false })
    ipAddress?: String;
}

