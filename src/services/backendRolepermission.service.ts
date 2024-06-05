import { Inject, Injectable } from "@nestjs/common";


@Injectable()
export class BackendRolePermissionService {
    constructor(
    @Inject('backedRolePermissionModule') private backendrolePermission,
  ){}

 async getAllBackendRolePermission() : Promise<Record<string,any>> {
    return this.backendrolePermission.findAll();
 }

 async createBackendRolePermission(backendrolePermissionDetails) : Promise<Record<string,any>>{
   const payload ={
      createdAt:new Date(),
      createdBy: 'system',
      updatedAt:new Date(),
      updatedBy: 'system',
      ...backendrolePermissionDetails
   }
   return this.backendrolePermission.create(payload);
 }
}
