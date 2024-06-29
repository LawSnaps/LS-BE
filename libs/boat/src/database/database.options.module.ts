import { Module } from '@nestjs/common';
import { DatabaseOptionsService } from './services/database.options.services';
import { ConfigService } from '@nestjs/config';

@Module({
    providers: [DatabaseOptionsService,ConfigService],
    exports: [DatabaseOptionsService],
    imports: [],
    controllers: [],
})
export class DatabaseOptionsModule {}
