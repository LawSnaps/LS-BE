import { Types } from "mongoose";
import { BaseDTO } from "./base.dto";

export class CreatBackendUserPermissionDto extends BaseDTO {
    BackEndPermissionId:Types.ObjectId;
    BackEndUserId:Types.ObjectId;
}