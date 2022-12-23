import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { CreateChatBody } from '../dtos/create-chat-body';
import { CreateMessageBody } from '../dtos/create-message.body';
import { ChatRepository } from '../repositories/chat-repository';
import { MessageRepository } from '../repositories/message-repository';

@Controller('api/chat')
export class ApiController {
  constructor(
    private readonly chatRepository: ChatRepository,
    private readonly messageRepository: MessageRepository
  ) {}
  
  @Get(':id')
  public async getMessages(@Param() params: any): Promise<any> {
    return await this.messageRepository.findByChatId(params.id);
  }  
    
  @Post()
  public async storeChat(@Body() body: CreateChatBody): Promise<any> {
    const { name } = body;

    const chat = await this.chatRepository.create({ name });
    return { chat }
  }

  @Post('send')
  public async sendMessage(@Body() body: CreateMessageBody): Promise<any> {
    const { content, authorId, chatId } = body;
    
    const message = await this.messageRepository.add({
      content,
      authorId,
      chatId
    });
    return { message }
  }
}
