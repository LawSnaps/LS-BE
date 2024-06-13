import { Inject, Injectable } from '@nestjs/common';
import { CustomLogger } from '@libs/boat/logger/customLogger';
@Injectable()
export class EmployeeService {
  constructor(@Inject('employeeModule') private users, private readonly customLogger: CustomLogger) {}

  async getAllEmployee(): Promise<Record<string, any>> {
    this.customLogger.log('This is an info message');
    return this.users.findAll();
  }

  async createEmployee(
    employeeDetails,
    ipAddress: string,
  ): Promise<Record<string, any>> {
    const payload = {
      createdAt: new Date(),
      createdBy: 'system',
      ipAddress: ipAddress,
      updatedAt: new Date(),
      updatedBy: 'system',
      ...employeeDetails,
    };
    return this.users.create(payload);
  }
}
