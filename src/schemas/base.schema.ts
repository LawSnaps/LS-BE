import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument,Document } from 'mongoose';

@Schema()
export class BaseSchema extends Document {
    @Prop({require:true})
    createdAt : Date ;

    @Prop({require:true})
    createdBy: String ;
}

