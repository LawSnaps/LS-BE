import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeController } from '@app/controllers/employee.controller';
import { EmployeeService } from '@app/services';
import { Employees, EmployeeSchema } from '@app/schemas/employee.schema';
import { EmployeeRepository } from '@app/repositories';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Employees.name, schema: EmployeeSchema },
    ]),
  ],
  controllers: [EmployeeController],
  providers: [
    EmployeeService,
    { provide: 'employeeModule', useClass: EmployeeRepository },
  ],
})
export class EmployeeModule {}
