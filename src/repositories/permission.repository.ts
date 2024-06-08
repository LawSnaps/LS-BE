import {
  Permission,
  PermissionSchemaDocument,
} from '@app/schemas/permission.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from './base.repository';

@Injectable()
export class PermissionRepository extends BaseRepository<PermissionSchemaDocument> {
  constructor(
    @InjectModel(Permission.name)
    private permissionModel: Model<PermissionSchemaDocument>,
  ) {
    super(permissionModel);
  }
}
