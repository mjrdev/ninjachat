import { Injectable, Req } from '@nestjs/common';
import { Request } from 'express';
import { CreateChatBody } from './http/dtos/create-chat-body';

@Injectable()
export class AppService {
  async sendIndex(): Promise<any> {
    return {}
  }
}
