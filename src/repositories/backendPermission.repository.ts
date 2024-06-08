import {
  BackendPermission,
  BackendPermissionSchemaDocument,
} from '@app/schemas/backendPermission.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from './base.repository';

@Injectable()
export class BackendPermissionRepository extends BaseRepository<BackendPermissionSchemaDocument> {
  constructor(
    @InjectModel(BackendPermission.name)
    private backendPermissionModel: Model<BackendPermissionSchemaDocument>,
  ) {
    super(backendPermissionModel);
  }
}
