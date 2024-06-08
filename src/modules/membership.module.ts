import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MembershipController } from '@app/controllers/membership.controller';
import { MembershipService } from '@app/services/membership.service';
import { Membership, MembershipSchema } from '@app/schemas/membership.schema';
import { MembershipRepository } from '@app/repositories';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Membership.name, schema: MembershipSchema },
    ]),
  ],
  controllers: [MembershipController],
  providers: [
    MembershipService,
    { provide: 'membershipModule', useClass: MembershipRepository },
  ],
})
export class MembershipModule {}
