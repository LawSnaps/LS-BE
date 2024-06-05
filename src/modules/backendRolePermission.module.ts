
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {BackendRolePermissionController} from '@app/controllers/backendrolePermission.controller'
import { BackendRolePermissionService } from '@app/services/backendRolepermission.service';
import { BackendRolePermission,BackendRolePermissionSchema } from '@app/schemas/backendRolePermission.schema';
import { BackendRolePermissionRepository } from '@app/repositories/backendRolePermission.repository';


@Module({
  imports: [MongooseModule.forFeature([{ name:BackendRolePermission.name , schema: BackendRolePermissionSchema }])],
  controllers: [BackendRolePermissionController],
  providers: [BackendRolePermissionService,
    { provide: 'backendrolePermissionModule', useClass: BackendRolePermissionRepository },

],
})
export class BackendRolePermissionModule {}
