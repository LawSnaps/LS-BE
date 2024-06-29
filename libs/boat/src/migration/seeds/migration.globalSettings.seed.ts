import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { GlobalSettingsService } from '@app/services';


@Injectable()
export class MigrationGlobalSettingsSeed
 {
    constructor(
        private readonly globalSettingsService: GlobalSettingsService
    ){ }

    @Command({
        command: 'seed:globalsettings',
        describe: 'seed globalsettings',
    })
    async seeds():Promise<void>{
        try{
            await this.globalSettingsService.createGlobalSettings(
                 {
                     key:"test",
                     value:"migration",
                     locked:false
                 },
                 '127.0.0.1'
             );
         }catch(error){
             throw new Error(error.message)
         }
 
        return ;
    }
    
 }