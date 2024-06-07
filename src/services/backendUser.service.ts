import { Inject, Injectable } from "@nestjs/common";


@Injectable()
export class BackendUserService {
   constructor(
      @Inject('backendUserModule') private users,
   ) { }

   async getAllBackendUser(): Promise<Record<string, any>> {
      return this.users.findAll();
   }

   async createBackendUser(employeeDetails): Promise<Record<string, any>> {
      const payload = {
         createdAt: new Date(),
         createdBy: 'system',
         ...employeeDetails
      }
      return this.users.create(payload);
   }
}
