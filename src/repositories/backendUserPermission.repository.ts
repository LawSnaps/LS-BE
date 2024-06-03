import { CreatBackendUserPermissionDto } from "@app/dto/backendUserPermission.dto";
import { BackendUserPermission, BackenduserPermissionSchemaDocument } from "@app/schemas/backendUserPermission.schema";
import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
@Injectable()
export class BackendUserPermissionRepository {
    constructor( @InjectModel(BackendUserPermission.name)
    private model: Model <BackenduserPermissionSchemaDocument>){}
   

    async create(CreatBackendUserPermissionDto: CreatBackendUserPermissionDto): Promise<BackendUserPermission> {
      try{
        const createdBackendUserPermission = new this.model(CreatBackendUserPermissionDto);
        return createdBackendUserPermission.save();
      }catch(error){
        console.log("Error in create",error)
      }
      }
    
      async findAll(): Promise<BackendUserPermission[]> {
        try{
        return this.model.find().exec();
        }catch(error){
          console.log("error in repository",error)
        }
      }

}
