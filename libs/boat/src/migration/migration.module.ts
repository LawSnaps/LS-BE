import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommandModule } from 'nestjs-command';
import { DatabaseOptionsModule } from '../database/database.options.module';
import { DatabaseOptionsService } from '../database/services/database.options.services';
import { MigrationGlobalSettingsSeed } from './seeds/migration.globalSettings.seed';
import { GlobalSettingsModule } from '@app/modules';
@Module({
    imports: [
        GlobalSettingsModule,
        // MongooseModule.forRootAsync({
        //     imports: [DatabaseOptionsModule],
        //     useFactory: (databaseOptionsService: DatabaseOptionsService) =>
        //        databaseOptionsService.createOptions(),
        //     inject: [DatabaseOptionsService],
        //   }),
        MongooseModule.forRoot('mongodb+srv://mohitkashyap001:4DM9o2WUNf9swg37@lawsnap-cluster1.0ecx6fq.mongodb.net/?retryWrites=true&w=majority&appName=Lawsnap-Cluster1 '),
        CommandModule,
        
    ],
    providers: [
        MigrationGlobalSettingsSeed
    ],
    exports: [],
})
export class MigrationModule {}
