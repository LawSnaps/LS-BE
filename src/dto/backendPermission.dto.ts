import { BaseDTO } from "./base.dto";

export class CreateBackendPermissionDto extends BaseDTO {
    name:string;
    bcode: number
    description: string
}