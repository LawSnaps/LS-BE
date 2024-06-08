import { Types } from 'mongoose';
import { BaseDTO } from './base.dto';

export class CreateBackendUserRoleDto extends BaseDTO {
  backendRoleId: Types.ObjectId;
  backendUserId: Types.ObjectId;
}
