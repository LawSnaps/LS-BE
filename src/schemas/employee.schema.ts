import { Schema,Prop, SchemaFactory } from "@nestjs/mongoose";
import { BaseSchema } from "./base.schema";
import { HydratedDocument, Types } from 'mongoose';

export type EmployeeSchemaDocument =  HydratedDocument<Employees>;

@Schema()
export class Employees extends BaseSchema {
    @Prop({type: Types.ObjectId, ref: 'Company', required: true })
    public companyId!: Types.ObjectId;
  
    @Prop({type: Types.ObjectId, ref: 'Shift'})
    public shiftId?: Types.ObjectId;
  
    @Prop({ required: true })
    public employeeCode!: string;
  
    @Prop({type: Types.ObjectId, ref: 'Manager', required: true })
    public managerId!: Types.ObjectId;
  
    @Prop({ required: true })
    public firstName!: string;
  
    @Prop({ required: true })
    public lastName!: string;
  
    @Prop({ required: true })
    public displayName!: string;
  
    @Prop({type: Types.ObjectId, ref: 'Department', required: true })
    public departmentId!: number;
  
    @Prop({type: Types.ObjectId, ref: 'Designation', required: true })
    public designationId!: number;
  
    @Prop()
    public dateOfJoining?: Date;
  
    @Prop()
    public workPhone?: string;
  
    @Prop()
    public mobile?: string;
  
    @Prop({ default: null })
    public extension?: string;
  
    @Prop()
    public referredBy?: string;
  
    @Prop()
    public sourceOfHire?: string;
  
    @Prop()
    public exitDate?: Date;
  
    @Prop()
    public exitRemarks?: string;
  
    @Prop({ maxlength: 1 })
    public gender?: string;
  
    @Prop()
    public dob?: Date;
  
    @Prop({ default: null })
    public citizenship?: string;
  
    @Prop({ default: null, maxlength: 3 })
    public bloodGroup?: string;
  
    @Prop()
    public maritalStatus?: string;
  
    @Prop()
    public residencePhone?: string;
  
    @Prop()
    public spouseName?: string;
  
    @Prop()
    public passportNo?: string;
  
    @Prop()
    public presentAddress?: string;
  
    @Prop()
    public permanentAddress?: string;
  
    @Prop()
    public status?: string;
  
    @Prop()
    public email?: string;
  
    @Prop()
    public password?: string;
  
    @Prop({ default: 0 })
    public isAdmin!: number;
  
    @Prop({ default: 0 })
    public isSuperAdmin!: number;
  
    @Prop({ default: 0 })
    public isReportingManager!: number;
  
    @Prop()
    public role?: string;
  
    @Prop()
    public personalEmail?: string;
  
    @Prop({ default: 1 })
    public isActive!: number;
  
    @Prop()
    public payStructureId?: number;
  
    @Prop()
    public lastLogin?: Date;
  
    @Prop()
    public employeeStatus?: number;
  
    @Prop()
    public entityId?: number;
  
    @Prop()
    public bandId?: number;
  
    @Prop()
    public locationId?: number;
  
    @Prop()
    public pfNumber?: string;
  
    @Prop()
    public esicNumber?: string;
  
    @Prop()
    public modules?: number;
  
    @Prop()
    public defaultAttendance?: number;
  
    @Prop()
    public employmentType?: number;
  
    @Prop()
    public drivingLicenceNo?: string;
  
    @Prop()
    public ssn?: string;
  
    @Prop()
    public enrollNumber?: number;
  
    @Prop({ default: null })
    public aadhaarNumber?: string;
  
    @Prop({ default: null })
    public pan?: string;
  
    @Prop({ default: null })
    public uan?: string;
  
    @Prop({ default: null })
    public confirmationDate?: Date;
  
    @Prop({ default: null })
    public probationPeriod?: number;
  
    @Prop({ default: null })
    public noticePeriod?: number;
  
    @Prop({ default: null })
    public im?: string;
  
    @Prop()
    public skills?: string;
  
    @Prop({ default: null })
    public excludedModules?: number;
  
    @Prop({ default: null })
    public employeeSetup?: number;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employees);