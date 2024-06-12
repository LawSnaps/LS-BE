import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BackendRolePermissionController } from '@app/controllers/backendrolePermission.controller';
import {
  BackendRolePermission,
  BackendRolePermissionSchema,
} from '@app/schemas/backendRolePermission.schema';
import { BackendRolePermissionRepository } from '@app/repositories';
import { BackendRolePermissionService } from '@app/services';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BackendRolePermission.name, schema: BackendRolePermissionSchema },
    ]),
  ],
  controllers: [BackendRolePermissionController],
  providers: [
    BackendRolePermissionService,
    {
      provide: 'backendRolePermissionModule',
      useClass: BackendRolePermissionRepository,
    },
  ],
})
export class BackendRolePermissionModule {}
