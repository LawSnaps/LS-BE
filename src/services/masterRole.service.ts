import { Inject, Injectable } from "@nestjs/common";


@Injectable()
export class MasterRoleService {
    constructor(
    @Inject('masterRoleModule') private masterRole,
  ){}

 async getAllMasterRole() : Promise<Record<string,any>> {
    return this.masterRole.findAll();
 }

 async createMasterRole(masterRoleDetails) : Promise<Record<string,any>>{
   const payload ={
      createdAt:new Date(),
      createdBy: 'system',
      updatedAt:new Date(),
      updatedBy: 'system',
      ...masterRoleDetails
   }
   return this.masterRole.create(payload);
 }
}
