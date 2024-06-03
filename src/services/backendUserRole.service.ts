import { Inject, Injectable } from "@nestjs/common";


@Injectable()
export class BackendUserRoleService {
    constructor(
        @Inject('backendUserRoleModule') private backendPermission,
    ) { }

    async getAllBackendUserRole(): Promise<Record<string, any>> {
        return this.backendPermission.findAll();
    }

    async createBackendUserRole(BackendUserRoleDetails): Promise<Record<string, any>> {
        const payload = {
            createdAt: new Date(),
            createdBy: 'system',
            updatedAt: new Date(),
            updatedBy: 'system',
            ...BackendUserRoleDetails
        }
        return this.backendPermission.create(payload);
    }
}
