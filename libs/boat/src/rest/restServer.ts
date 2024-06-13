import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';
import { ServerOptions } from './interfaces';
import { ConfigService } from '@nestjs/config';
import { RequestGuard } from './guards';
import { ExceptionFilter } from '../exceptions';
import { CustomLogger } from '../logger/customLogger';
export class RestServer {
  private module: any;
  private options: ServerOptions;

  /**
   * Create instance of fastify lambda server
   * @returns Promise<INestApplication>
   */

  static async make(module: any, options?: ServerOptions): Promise<void> {
    const app = await NestFactory.create(module, {logger: new CustomLogger()});
    const logger = app.get(CustomLogger);

    if (options?.addValidationContainer) {
      useContainer(app.select(module), { fallbackOnErrors: true });
    }

    app.enableCors({ origin: true });

    app.useGlobalGuards(new RequestGuard());
    //const { httpAdapter } = app.get(HttpAdapterHost);
    app.useGlobalFilters(new ExceptionFilter(logger));
    options.globalPrefix && app.setGlobalPrefix(options.globalPrefix);

    app.useLogger(logger);  // This sets the global logger

    const config = app.get(ConfigService, { strict: false });
    await app.listen(options.port || config.get<number>('app.port'));
  }
}
