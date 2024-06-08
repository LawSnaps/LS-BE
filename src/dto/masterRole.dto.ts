import { BaseDTO } from "./base.dto";

export class CreateMasterRoleDto extends BaseDTO {
    name?: string;
    description?: string;
}