import { BaseDTO } from './base.dto';

export class CreateBackendUserDto extends BaseDTO {
  username: string;
  password: string;
  name: string;
  email: string;
  permissions: number;
  role: number;
}

export class UpdateBackendUserDto extends BaseDTO {
  username?: string;
  password?: string;
  name?: string;
  email?: string;
  permissions?: number;
  role?: number;
}
