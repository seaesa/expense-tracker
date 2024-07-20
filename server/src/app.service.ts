import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return { url: 'https://docs.nestjs.com/v5/' };
  }
}
