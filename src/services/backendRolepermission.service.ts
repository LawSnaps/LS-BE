import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class BackendRolePermissionService {
  constructor(
    @Inject('backendRolePermissionModule') private backendRolePermission,
  ) {}

  async getAllBackendRolePermission(): Promise<Record<string, any>> {
    return this.backendRolePermission.findAll();
  }

  async createBackendRolePermission(
    backendRolePermissionDetails,
  ): Promise<Record<string, any>> {
    const payload = {
      createdAt: new Date(),
      createdBy: 'system',
      updatedAt: new Date(),
      updatedBy: 'system',
      ...backendRolePermissionDetails,
    };
    return this.backendRolePermission.create(payload);
  }
}
