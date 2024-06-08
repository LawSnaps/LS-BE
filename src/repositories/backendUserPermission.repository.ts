import {
  BackendUserPermission,
  BackenduserPermissionSchemaDocument,
} from '@app/schemas/backendUserPermission.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from './base.repository';
@Injectable()
export class BackendUserPermissionRepository extends BaseRepository<BackenduserPermissionSchemaDocument> {
  constructor(
    @InjectModel(BackendUserPermission.name)
    private backendUserPermissionModel: Model<BackenduserPermissionSchemaDocument>,
  ) {
    super(backendUserPermissionModel);
  }
}
