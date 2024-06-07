
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BackendUserController } from '@app/controllers/backendUser.controller'
import { BackendUserService } from '@app/services/backendUser.service';
import { BackendUser, BackendUserSchema } from '@app/schemas/backendUser.schema';
import { BackendUserRepository } from '@app/repositories';


@Module({
  imports: [MongooseModule.forFeature([{ name: BackendUser.name, schema: BackendUserSchema }])],
  controllers: [BackendUserController],
  providers: [BackendUserService, { provide: 'backendUserModule', useClass: BackendUserRepository },],
})
export class BackendUserModule { }
