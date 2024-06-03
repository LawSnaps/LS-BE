import { Inject, Injectable } from "@nestjs/common";


@Injectable()
export class BackendUserPermissionService {
    constructor(
    @Inject('backedUserPermissionModule') private backenduserPermission,
  ){}

 async getAllEmployee() : Promise<Record<string,any>> {
    return this.backenduserPermission.findAll();
 }

 async createEmployee(backenduserPermissionDetails) : Promise<Record<string,any>>{
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
