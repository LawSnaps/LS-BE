import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class PermissionService {
  constructor(@Inject('permissionModule') private permission) {}

  async getAllPermission(): Promise<Record<string, any>> {
    return this.permission.findAll();
  }

  async createPermission(permissionDetails): Promise<Record<string, any>> {
    const payload = {
      createdAt: new Date(),
      createdBy: 'system',
      updatedAt: new Date(),
      updatedBy: 'system',
      ...permissionDetails,
    };
    return this.permission.create(payload);
  }
}
