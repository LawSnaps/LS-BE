import {
  BackendRole,
  BackendRoleSchemaDocument,
} from '@app/schemas/backendRole.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from './base.repository';

@Injectable()
export class BackendRoleRepository extends BaseRepository<BackendRoleSchemaDocument> {
  constructor(
    @InjectModel(BackendRole.name)
    private backendRoleModel: Model<BackendRoleSchemaDocument>,
  ) {
    super(backendRoleModel);
  }
}
