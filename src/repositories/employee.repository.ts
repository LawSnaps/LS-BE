import { CreateEmployeeDto } from "@app/dto/employee.dto";
import { Employees, EmployeeSchemaDocument } from "@app/schemas/employee.schema";
import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
@Injectable()
export class EmployeeRepository {
    constructor( @InjectModel(Employees.name)
    private model: Model <EmployeeSchemaDocument>){}
   

    async create(createEmployeeDto: CreateEmployeeDto): Promise<Employees> {
      try{
        const createdEmployee = new this.model(createEmployeeDto);
        return createdEmployee.save();
      }catch(error){
        console.log("Error in create",error)
      }
      }
    
      async findAll(): Promise<Employees[]> {
        try{
        return this.model.find().exec();
        }catch(error){
          console.log("error in repository",error)
        }
      }

}
