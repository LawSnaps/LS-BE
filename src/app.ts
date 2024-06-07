import { Module } from '@nestjs/common';
import { BoatModule } from '@libs/boat';
import { MongooseModule } from '@nestjs/mongoose';
import { BackendPermissionModule, BackendUserModule, EmployeeModule, BackendRoleModule, BackendUserPermissionModule, BackendUserRoleModule } from './modules';
@Module({
  imports: [
    BoatModule,
    EmployeeModule,
    BackendUserModule,
    BackendPermissionModule,
    BackendUserModule,
    BackendRoleModule,
    BackendUserPermissionModule,
    BackendUserRoleModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/lawsnaps')
  ]
})
export class AppModule { }
