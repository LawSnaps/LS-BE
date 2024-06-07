
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MasterRoleController } from '@app/controllers/masterRole.controller'
import { MasterRoleService } from '@app/services/masterRole.service'
import { MasterRole, MasterRoleSchema } from '@app/schemas/masterRole.schema';
import { MasterRoleRepository } from '@app/repositories/masterRole.repository';


@Module({
    imports: [MongooseModule.forFeature([{ name: MasterRole.name, schema: MasterRoleSchema }])],
    controllers: [MasterRoleController],
    providers: [MasterRoleService,
        { provide: 'masterRoleModule', useClass: MasterRoleRepository },

    ],
})
export class MasterRoleModule { }
