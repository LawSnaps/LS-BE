import {
  Catch,
  ArgumentsHost,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { ValidationFailed, InvalidCredentials, GenericException } from '.';
import { Unauthorized } from './unauthorized';
import { CustomLogger } from '../logger/customLogger';

@Catch()
export class ExceptionFilter extends BaseExceptionFilter {
  constructor(private readonly logger: CustomLogger) {
    super();
  }

  doNotReport(): Array<any> {
    return [
      NotFoundException,
      ValidationFailed,
      InvalidCredentials,
      GenericException,
      Unauthorized,
      UnauthorizedException,
    ];
  }
  catch(exception: any, host: ArgumentsHost) {
    console.error('ERRRR ==> ', exception);
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<any>();

    if (exception instanceof ValidationFailed) {
      return response.error(
        {
          message: exception.message,
          errors: exception.getErrors(),
        },
        exception.getStatus(),
      );
    }

    let message =
      exception.message || 'Something went wrong. Please try again later';

    const status = exception.status ? exception.status : 500;
    message = exception.status ? message : 'Internal Server Error';

    const stack = exception.stack || '';
    this.logger.error(`${message} -> ${stack}`);
    
    return response.status(status).json({
      success: false,
      code: status,
      message,
    });
  }
}
