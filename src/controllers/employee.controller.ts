import { EmployeeService } from "@app/services/employee.service";
import { Controller, Get, Post, Req, Res } from "@nestjs/common";
import { Request,Response } from "express";

@Controller('employees')
export class EmployeeController {
  constructor(private service: EmployeeService) {
  }

  @Get('/')
  async getProfile(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<Response> {
    const user = await this.service.getAllEmployee();
    return res.status(200).send(user);
  }

  @Post('/')
  async create(
    @Req() req :Request,
    @Res() res:Response
    ): Promise<Response>{
      const {body}=req;
      const createdEmp = await this.service.createEmployee(body)
      if(createdEmp){
        return res.status(200).send("Employee Created")
      }
    }
  }
