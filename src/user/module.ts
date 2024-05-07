import { Module } from '@nestjs/common';
import { UserController } from './controllers';
import { UserService } from './services';
import { UserModuleConstants } from './constants';
import { UserRepository } from './repositories';
import { GreetUser } from './commands';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [UserController],
  providers: [
    UserService,
    GreetUser,
    { provide: UserModuleConstants.userRepo, useClass: UserRepository },
  ],
})
export class UserModule {}
