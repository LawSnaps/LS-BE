import { CreatBackendRolePermissionDto } from '@app/dto/backendRolePermission.dto';
import {
  BackendRolePermission,
  BackendrolePermissionSchemaDocument,
} from '@app/schemas/backendRolePermission.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class BackendRolePermissionRepository {
  constructor(
    @InjectModel(BackendRolePermission.name)
    private model: Model<BackendrolePermissionSchemaDocument>,
  ) {}

  async create(
    CreatBackendRolePermissionDto: CreatBackendRolePermissionDto,
  ): Promise<BackendRolePermission> {
    try {
      const createdBackendRolePermission = new this.model(
        CreatBackendRolePermissionDto,
      );
      return createdBackendRolePermission.save();
    } catch (error) {
      console.log('Error in create', error);
    }
  }

  async findAll(): Promise<BackendRolePermission[]> {
    try {
      return this.model.find().exec();
    } catch (error) {
      console.log('error in repository', error);
    }
  }
}
