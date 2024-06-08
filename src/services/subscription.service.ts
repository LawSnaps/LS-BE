import { Inject, Injectable } from "@nestjs/common";


@Injectable()
export class SubscriptionService {
    constructor(
    @Inject('subscriptionModule') private subscription,
  ){}

 async getAllSubscription() : Promise<Record<string,any>> {
    return this.subscription.findAll();
 }

 async createSubscription(subscriptionDetails) : Promise<Record<string,any>>{
   const payload ={
      createdAt:new Date(),
      createdBy: 'system',
      updatedAt:new Date(),
      updatedBy: 'system',
      ...subscriptionDetails
   }
   return this.subscription.create(payload);
 }
}
