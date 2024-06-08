import { Module } from '@nestjs/common';
import { BoatModule } from '@libs/boat';
import { MongooseModule } from '@nestjs/mongoose';
import {
  BackendPermissionModule,
  BackendUserModule,
  EmployeeModule,
  BackendRoleModule,
  BackendUserPermissionModule,
  BackendUserRoleModule,
  MasterRoleModule,
  InvoiceModule,
  InvoiceItemModule,
  InvoiceTransactionModule,
  SubscriptionModule,
  PermissionModule,
  BackendRolePermissionModule,
  CompanyModule,
  GlobalSettingsModule,
  MembershipModule,
  ServicePlanModule
} from './modules';
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
    MasterRoleModule,
    InvoiceModule,
    InvoiceItemModule,
    InvoiceTransactionModule,
    SubscriptionModule,
    PermissionModule,
    CompanyModule,
    BackendRolePermissionModule,
    GlobalSettingsModule,
    MembershipModule,
    ServicePlanModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/lawsnaps')
  ]
})
export class AppModule { }
