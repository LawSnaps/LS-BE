import { CreateBackendRoleDto } from "@app/dto/backendRole.dto";
import { BackendRole, BackendRoleSchemaDocument } from "@app/schemas/backendRole.schema";
import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class BackendRoleRepository {
    constructor(@InjectModel(BackendRole.name)
    private model: Model<BackendRoleSchemaDocument>) { }

    async create(createBackendRoleDto: CreateBackendRoleDto): Promise<BackendRole> {
        try {
            const createdBackendRole = new this.model(createBackendRoleDto);
            return createdBackendRole.save();
        } catch (error) {
            console.log("Error in create", error)
        }
    }

    async findAll(): Promise<BackendRole[]> {
        try {
            return this.model.find().exec();
        } catch (error) {
            console.log("error in repository", error)
        }
    }
}
