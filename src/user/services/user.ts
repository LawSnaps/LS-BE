import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../schemas/user.schema';
import { GetUserDto } from '../dto/get-user.dto';
import { UserRepositoryContract } from '../repositories';
import { ListensTo } from '@squareboat/nest-events';
import { UserSignedUp } from '../events/userSignedUp';
import { UserModuleConstants } from '../constants';

@Injectable()
export class UserService {
  constructor(
    @Inject(UserModuleConstants.userRepo) private users: UserRepositoryContract,
    @InjectModel(User.name) private userModel: Model<User>
  ) {}

  async get(): Promise<Record<string, any>> {
    //return this.users.firstWhere({});
    return this.userModel.find().exec();
  }

  @ListensTo('USER_SIGNED_UP')
  userSignedUp(event: UserSignedUp): void {
    console.log('EVENT RECEIVED ===>', event);
    // add your logic here
    return;
  }
}
