import { Inject, Injectable } from "@nestjs/common";


@Injectable()
export class EmployeeService {
   constructor(
      @Inject('employeeModule') private users,
   ) { }

   async getAllEmployee(): Promise<Record<string, any>> {
      return this.users.findAll();
   }

   async createEmployee(employeeDetails, ipAddress: string): Promise<Record<string, any>> {
      const payload = {
         createdAt: new Date(),
         createdBy: 'system',
         ipAddress: ipAddress,
         updatedAt: new Date(),
         updatedBy: 'system',
         ...employeeDetails
      }
      return this.users.create(payload);
   }
}
