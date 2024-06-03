import { Inject, Injectable } from "@nestjs/common";


@Injectable()
export class BackendPermissionService {
    constructor(
        @Inject('backendPermissionModule') private backendPermission,
    ) { }

    async getAllBackendPermission(): Promise<Record<string, any>> {
        return this.backendPermission.findAll();
    }

    async createBackendPermission(BackendPermissionDetails): Promise<Record<string, any>> {
        const payload = {
            createdAt: new Date(),
            createdBy: 'system',
            updatedAt: new Date(),
            updatedBy: 'system',
            ...BackendPermissionDetails
        }
        return this.backendPermission.create(payload);
    }
}
