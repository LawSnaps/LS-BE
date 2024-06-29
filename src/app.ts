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
} from './modules';
import { CustomLogger } from '@libs/boat/logger/customLogger';
import { DatabaseOptionsModule } from '@libs/boat/database/database.options.module';
import { DatabaseOptionsService } from '@libs/boat/database/services/database.options.services';
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
     MongooseModule.forRootAsync({
      imports: [DatabaseOptionsModule],
      useFactory: (databaseOptionsService: DatabaseOptionsService) =>
         databaseOptionsService.createOptions(),
      inject: [DatabaseOptionsService],
    }),
  ],
  providers:[
    CustomLogger
  ]
})
export class AppModule {}
