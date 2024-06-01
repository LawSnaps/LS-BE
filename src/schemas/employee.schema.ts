import { Schema,Prop, SchemaFactory } from "@nestjs/mongoose";
import { BaseSchema } from "./base.schema";
import { HydratedDocument } from 'mongoose';

export type EmployeeSchemaDocument =  HydratedDocument<Employees>;

@Schema()
export class Employees extends BaseSchema {
    @Prop({require:true})
    name:string

}

export const EmployeeSchema = SchemaFactory.createForClass(Employees);