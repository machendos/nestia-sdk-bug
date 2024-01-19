import {Body, Controller, Get, Post} from '@nestjs/common';
import { AppService } from './app.service';

export class AAA {
a: number
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello(@Body() b: AAA): AAA {
    return b;
  }
}
