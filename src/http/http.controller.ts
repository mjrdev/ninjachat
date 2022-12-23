import { Controller, Get, Render, Query } from '@nestjs/common';
import { CreateNinja } from '@use/create-ninja';
import { MessageRepository } from './repositories/message-repository';

@Controller()
export class HttpController {
  constructor(
    private createNinja: CreateNinja,
    private messageRepository: MessageRepository
  ) {}
  @Get()
  @Render('index')
  index() {
    return {}
  }
  
  @Get('/chat')
  @Render('chat')
  async chat(@Query() queries: any): Promise<any> {
    const { name } = queries;

    return {}
  }
}
