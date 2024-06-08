import { BaseDTO } from './base.dto';

export class CreatePermissionDto extends BaseDTO {
  name?: string;
  description?: string;
}
