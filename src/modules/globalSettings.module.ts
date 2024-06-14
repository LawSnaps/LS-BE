import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GlobalSettingsController } from '@app/controllers/globalSettings.controller';
import { GlobalSettingsService } from '@app/services';
import {
  GlobalSettings,
  GlobalSettingsSchema,
} from '@app/schemas/globalSettings.schema';
import { GlobalSettingsRepository } from '@app/repositories';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: GlobalSettings.name, schema: GlobalSettingsSchema },
    ]),
  ],
  controllers: [GlobalSettingsController],
  providers: [
    GlobalSettingsService,
    { provide: 'globalSettingsModule', useClass: GlobalSettingsRepository },
  ],
})
export class GlobalSettingsModule {}
