import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SubscriptionController } from '@app/controllers/subscription.controller';
import { SubscriptionService } from '@app/services';
import {
  Subscription,
  SubscriptionSchema,
} from '@app/schemas/subscription.schema';
import { SubscriptionRepository } from '@app/repositories';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Subscription.name, schema: SubscriptionSchema },
    ]),
  ],
  controllers: [SubscriptionController],
  providers: [
    SubscriptionService,
    { provide: 'subscriptionModule', useClass: SubscriptionRepository },
  ],
})
export class SubscriptionModule { }
