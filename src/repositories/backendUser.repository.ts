import { CreateBackendUserDto } from "@app/dto/backendUser.dto";
import { BackendUser, BackendUserSchemaDocument } from "@app/schemas/backendUser.schema";
import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BaseRepository } from "./base.repository";

@Injectable()
export class BackendUserRepository extends BaseRepository<BackendUserSchemaDocument> {
    constructor(@InjectModel(BackendUser.name) private backendUserModel: Model<BackendUserSchemaDocument>) {
        super(backendUserModel);
    }
}