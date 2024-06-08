import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class BackendRoleService {
  constructor(@Inject('backendRoleModule') private backendRole) {}

  async getAllBackendRole(): Promise<Record<string, any>> {
    return this.backendRole.findAll();
  }

  async createBackendRole(
    backendRoleDetails,
    ipAddress: string,
  ): Promise<Record<string, any>> {
    const payload = {
      createdAt: new Date(),
      createdBy: 'system',
      updatedAt: new Date(),
      updatedBy: 'system',
      ipAddress: ipAddress,
      ...backendRoleDetails,
    };
    return this.backendRole.create(payload);
  }
}
