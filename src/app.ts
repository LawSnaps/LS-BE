import { Module } from '@nestjs/common';
import { BoatModule } from '@libs/boat';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeModule } from './modules/employee.module';
@Module({
  imports: [
    BoatModule,
    EmployeeModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/lawsnaps')
  ]
})
export class AppModule { }
