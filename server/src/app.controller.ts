import { Body, Controller, Get, HostParam, HttpCode, Ip, Param, Post, Redirect, Req, Res, Response } from '@nestjs/common';
import { AppService } from './app.service';
@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('home/:id')
  getHello(@Param() params: Request): any {
    console.log(params)
    return this.appService.getHello();
  }
  @Post('home')
  getPost(@Response() hosts: Request) {
    console.log(hosts)
    return "wefwf"
  }
}
