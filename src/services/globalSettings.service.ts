import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class GlobalSettingsService {
  constructor(@Inject('globalSettingsModule') private globalSettings) {}

  async getAllGlobalSettings(): Promise<Record<string, any>> {
    return this.globalSettings.findAll();
  }

  async createGlobalSettings(
    globalSettingsDetails,
    ipAddress: string,
  ): Promise<Record<string, any>> {
    const payload = {
      createdAt: new Date(),
      createdBy: 'system',
      updatedAt: new Date(),
      updatedBy: 'system',
      ipAddress: ipAddress,
      ...globalSettingsDetails,
    };
    return this.globalSettings.create(payload);
  }
}
