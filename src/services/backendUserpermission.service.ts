import { Inject, Injectable } from "@nestjs/common";


@Injectable()
export class BackendUserPermissionService {
    constructor(
    @Inject('backendUserPermissionModule') private backenduserPermission,
  ){}

 async getAllBackendUserPermission() : Promise<Record<string,any>> {
    return this.backenduserPermission.findAll();
 }

 async createBackendUserPermission(backenduserPermissionDetails) : Promise<Record<string,any>>{
   const payload ={
      createdAt:new Date(),
      createdBy: 'system',
      updatedAt:new Date(),
      updatedBy: 'system',
      ...backenduserPermissionDetails
   }
   return this.backenduserPermission.create(payload);
 }
}
