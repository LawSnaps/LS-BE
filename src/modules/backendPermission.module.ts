
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BackendPermissionController } from '@app/controllers/backendPermission.controller'
import { BackendPermissionService } from '@app/services/BackendPermission.service'
import { BackendPermission, BackendPermissionSchema } from '@app/schemas/backendPermission.schema';
import { BackendPermissionRepository } from '@app/repositories/backendPermission.repository';


@Module({
    imports: [MongooseModule.forFeature([{ name: BackendPermission.name, schema: BackendPermissionSchema }])],
    controllers: [BackendPermissionController],
    providers: [BackendPermissionService,
        { provide: 'backendPermissionModule', useClass: BackendPermissionRepository },

    ],
})
export class BackendPermissionModule { }
