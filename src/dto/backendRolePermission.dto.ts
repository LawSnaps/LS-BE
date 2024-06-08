import { Types } from 'mongoose';
import { BaseDTO } from './base.dto';

export class CreatBackendRolePermissionDto extends BaseDTO {
  BackEndRoleId: Types.ObjectId;
  BackEndPermissionId: Types.ObjectId;
}
