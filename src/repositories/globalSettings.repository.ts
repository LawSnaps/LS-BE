import { GlobalSettings, GlobalSettingsDocument,  } from "@app/schemas/globalSettings.schema";
import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BaseRepository } from "./base.repository";

@Injectable()
export class GlobalSettingsRepository extends BaseRepository<GlobalSettingsDocument> {
    constructor(@InjectModel(GlobalSettings.name) private globalSettingsModel: Model<GlobalSettingsDocument>) {
        super(globalSettingsModel)
     }
}
