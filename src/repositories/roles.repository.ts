import { Roles, RolesDocument,  } from "@app/schemas/roles.schema";
import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BaseRepository } from "./base.repository";

@Injectable()
export class RolesRepository extends BaseRepository<RolesDocument> {
    constructor(@InjectModel(Roles.name) private rolesModel: Model<RolesDocument>) {
        super(rolesModel)
     }
}
