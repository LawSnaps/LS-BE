import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BackendUserRoleController } from '@app/controllers/backendUserRole.controller';
import { BackendUserRoleService } from '@app/services/backendUserRole.service';
import {
  BackendUserRole,
  BackendUserRoleSchema,
} from '@app/schemas/backendUserRole.schema';
import { BackendUserRoleRepository } from '@app/repositories/backendUserRole.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BackendUserRole.name, schema: BackendUserRoleSchema },
    ]),
  ],
  controllers: [BackendUserRoleController],
  providers: [
    BackendUserRoleService,
    { provide: 'backendUserRoleModule', useClass: BackendUserRoleRepository },
  ],
})
export class BackendUserRoleModule {}
