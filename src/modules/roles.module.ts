import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RolesController } from '@app/controllers/roles.controller';
import { RolesService } from '@app/services/roles.service';
import { Roles, RolesSchema } from '@app/schemas/roles.schema';
import { RolesRepository } from '@app/repositories';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Roles.name, schema: RolesSchema }]),
  ],
  controllers: [RolesController],
  providers: [
    RolesService,
    { provide: 'rolesModule', useClass: RolesRepository },
  ],
})
export class RolesModule {}
