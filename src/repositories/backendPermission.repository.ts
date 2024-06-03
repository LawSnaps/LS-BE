import { CreateBackendPermissionDto } from "@app/dto/backendPermission.dto";
import { BackendPermission, BackendPermissionSchemaDocument } from "@app/schemas/backendPermission.schema";
import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class BackendPermissionRepository {
    constructor(@InjectModel(BackendPermission.name)
    private model: Model<BackendPermissionSchemaDocument>) { }

    async create(createBackendPermissionDto: CreateBackendPermissionDto): Promise<BackendPermission> {
        try {
            const createdBackendPermission = new this.model(createBackendPermissionDto);
            return createdBackendPermission.save();
        } catch (error) {
            console.log("Error in create", error)
        }
    }

    async findAll(): Promise<BackendPermission[]> {
        try {
            return this.model.find().exec();
        } catch (error) {
            console.log("error in repository", error)
        }
    }
}
