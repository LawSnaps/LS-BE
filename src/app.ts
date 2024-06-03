import { Module } from '@nestjs/common';
import { BoatModule } from '@libs/boat';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeModule } from './modules/employee.module';
import { BackendUserModule } from './modules/backendUser.module';
@Module({
  imports: [
    BoatModule,
    EmployeeModule,
    BackendUserModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/lawsnaps')
  ]
})
export class AppModule { }
