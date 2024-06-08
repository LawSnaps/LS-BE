import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class BackendPermissionService {
  constructor(@Inject('backendPermissionModule') private backendPermission) {}

  async getAllBackendPermission(): Promise<Record<string, any>> {
    return this.backendPermission.findAll();
  }

  async createBackendPermission(
    backendPermissionDetails,
    ipAddress: string,
  ): Promise<Record<string, any>> {
    const payload = {
      createdAt: new Date(),
      createdBy: 'system',
      updatedAt: new Date(),
      updatedBy: 'system',
      ipAddress: ipAddress,
      ...backendPermissionDetails,
    };
    return this.backendPermission.create(payload);
  }
}
