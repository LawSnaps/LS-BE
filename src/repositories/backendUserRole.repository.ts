import { CreateBackendUserRoleDto } from "@app/dto/backendUserRole.dto";
import { BackendUserRole, BackendUserRoleSchemaDocument } from "@app/schemas/backendUserRole.schema";
import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class BackendUserRoleRepository {
    constructor(@InjectModel(BackendUserRole.name)
    private model: Model<BackendUserRoleSchemaDocument>) { }

    async create(createBackendUserRoleDto: CreateBackendUserRoleDto): Promise<BackendUserRole> {
        try {
            const createdBackendUserRole = new this.model(createBackendUserRoleDto);
            return createdBackendUserRole.save();
        } catch (error) {
            console.log("Error in create", error)
        }
    }

    async findAll(): Promise<BackendUserRole[]> {
        try {
            return this.model.find().exec();
        } catch (error) {
            console.log("error in repository", error)
        }
    }
}
