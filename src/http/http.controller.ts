import { Controller, Get, Render, Query } from '@nestjs/common';
import { CreateNinja } from '@use/create-ninja';
import { MessageRepository } from './repositories/message-repository';

@Controller()
export class HttpController {
  constructor() {}
  @Get()
  @Render('index')
  index() {}
  
  @Get('/chat')
  @Render('chat')
  async chat(): Promise<any> {}
}
