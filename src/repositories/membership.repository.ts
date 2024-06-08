import { Membership, MembershipDocument } from '@app/schemas/membership.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from './base.repository';

@Injectable()
export class MembershipRepository extends BaseRepository<MembershipDocument> {
  constructor(
    @InjectModel(Membership.name)
    private membershipModel: Model<MembershipDocument>,
  ) {
    super(membershipModel);
  }
}
