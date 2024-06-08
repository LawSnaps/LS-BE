import { Subscription, SubscriptionSchemaDocument } from "@app/schemas/subscription.schema";
import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BaseRepository } from "./base.repository";

@Injectable()
export class SubscriptionRepository extends BaseRepository<SubscriptionSchemaDocument> {
    constructor(@InjectModel(Subscription.name) private subscriptionModel: Model<SubscriptionSchemaDocument>) {
        super(subscriptionModel)
     }
}
