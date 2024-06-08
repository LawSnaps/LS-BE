import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class RolesService {
  constructor(@Inject('rolesModule') private roles) {}

  async getAllRoles(): Promise<Record<string, any>> {
    return this.roles.findAll();
  }

  async createRoles(
    rolesDetails,
    ipAddress: string,
  ): Promise<Record<string, any>> {
    const payload = {
      createdAt: new Date(),
      createdBy: 'system',
      updatedAt: new Date(),
      updatedBy: 'system',
      ipAddress: ipAddress,
      ...rolesDetails,
    };
    return this.roles.create(payload);
  }
}
