import { BaseDTO } from "./base.dto";

export class CreateBackendUserRoleDto extends BaseDTO {
  backendRoleId: number;
  backendUserId: number;
}