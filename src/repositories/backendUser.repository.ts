import { CreateBackendUserDto } from "@app/dto/backendUser.dto";
import { BackendUser, BackendUserSchemaDocument } from "@app/schemas/backendUser.schema";
import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";


export class BackendUserRepository {
    constructor( @InjectModel(BackendUser.name)
    private model: Model <BackendUserSchemaDocument>){}
   

    async create(createBackendUserDto: CreateBackendUserDto): Promise<BackendUserSchemaDocument> {
      try{
        const createdBackendUser = new this.model(createBackendUserDto);
        return createdBackendUser.save();
      }catch(error){
        console.log("Error in create",error)
      }
      }
    
      async findAll(): Promise<BackendUserSchemaDocument[]> {
        try{
        return this.model.find().exec();
        }catch(error){
          console.log("error in repository",error)
        }
      }

}