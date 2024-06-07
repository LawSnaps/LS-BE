import { CreateEmployeeDto } from "@app/dto/employee.dto";
import { Employees, EmployeeSchemaDocument } from "@app/schemas/employee.schema";
import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BaseRepository } from "./base.repository";
@Injectable()
export class EmployeeRepository extends BaseRepository<EmployeeSchemaDocument> {
    constructor( @InjectModel(Employees.name) private employeesModel: Model <EmployeeSchemaDocument>){
      super(employeesModel)
    }

}
