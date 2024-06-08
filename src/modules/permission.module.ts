import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PermissionController } from '@app/controllers/permission.controller'
import { PermissionService } from '@app/services/permission.service'
import { Permission, PermissionSchema } from '@app/schemas/permission.schema';
import { PermissionRepository } from '@app/repositories/permission.repository';


@Module({
    imports: [MongooseModule.forFeature([{ name: Permission.name, schema: PermissionSchema }])],
    controllers: [PermissionController],
    providers: [PermissionService,
        { provide: 'permissionModule', useClass: PermissionRepository },

    ],
})
export class PermissionModule { }
