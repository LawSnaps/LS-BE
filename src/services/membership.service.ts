import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class MembershipService {
  constructor(@Inject('membershipModule') private membership) {}

  async getAllMembership(): Promise<Record<string, any>> {
    return this.membership.findAll();
  }

  async createMembership(
    membershipDetails,
    ipAddress: string,
  ): Promise<Record<string, any>> {
    const payload = {
      createdAt: new Date(),
      createdBy: 'system',
      updatedAt: new Date(),
      updatedBy: 'system',
      ipAddress: ipAddress,
      ...membershipDetails,
    };
    return this.membership.create(payload);
  }
}
