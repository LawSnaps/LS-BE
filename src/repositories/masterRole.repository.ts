import {
  MasterRole,
  MasterRoleSchemaDocument,
} from '@app/schemas/masterRole.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from './base.repository';

@Injectable()
export class MasterRoleRepository extends BaseRepository<MasterRoleSchemaDocument> {
  constructor(
    @InjectModel(MasterRole.name)
    private masterRoleModel: Model<MasterRoleSchemaDocument>,
  ) {
    super(masterRoleModel);
  }
}
