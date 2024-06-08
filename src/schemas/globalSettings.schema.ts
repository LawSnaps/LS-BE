import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from 'mongoose';
import { BaseSchema } from "./base.schema"; // Assuming you have a BaseSchema that includes common fields

export type GlobalSettingsDocument = HydratedDocument<GlobalSettings>;

@Schema()
export class GlobalSettings extends BaseSchema {
    @Prop({ maxlength: 50 })
    key: string;

    @Prop()
    value: string;

    @Prop()
    value2: string;

    @Prop()
    value3: string;

    @Prop()
    value4: string;

    @Prop()
    value5: string;

    @Prop()
    locked: boolean;
}

export const GlobalSettingsSchema = SchemaFactory.createForClass(GlobalSettings);
