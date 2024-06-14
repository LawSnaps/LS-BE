import { RestServer } from '@libs/boat';
import { AppModule } from './app';

RestServer.make(AppModule, { addValidationContainer: true,port:3300 });
