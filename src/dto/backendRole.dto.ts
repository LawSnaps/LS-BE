import { BaseDTO } from './base.dto';

export class CreateBackendRoleDto extends BaseDTO {
  name: string;
  bcode: number;
  description: string;
}
