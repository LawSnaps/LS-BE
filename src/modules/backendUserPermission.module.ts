
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {BackendUserPermissionController} from '@app/controllers/backenduserPermission.controller'
import { BackendUserPermissionService } from '@app/services/backendUserpermission.service';
import { BackendUserPermission,BackendUserPermissionSchema } from '@app/schemas/backendUserPermission.schema';
import { BackendUserPermissionRepository } from '@app/repositories/backendUserPermission.repository';


@Module({
  imports: [MongooseModule.forFeature([{ name:BackendUserPermission.name , schema: BackendUserPermissionSchema }])],
  controllers: [BackendUserPermissionController],
  providers: [BackendUserPermissionService,
    { provide: 'backenduserPermissionModule', useClass: BackendUserPermissionRepository },

],
})
export class BackendUserPermissionModule {}
