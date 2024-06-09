import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BackendUserPermissionController } from '@app/controllers/backendUserPermission.controller';
import { BackendUserPermissionService } from '@app/services';
import {
  BackendUserPermission,
  BackendUserPermissionSchema,
} from '@app/schemas/backendUserPermission.schema';
import { BackendUserPermissionRepository } from '@app/repositories';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BackendUserPermission.name, schema: BackendUserPermissionSchema },
    ]),
  ],
  controllers: [BackendUserPermissionController],
  providers: [
    BackendUserPermissionService,
    {
      provide: 'backendUserPermissionModule',
      useClass: BackendUserPermissionRepository,
    },
  ],
})
export class BackendUserPermissionModule {}
