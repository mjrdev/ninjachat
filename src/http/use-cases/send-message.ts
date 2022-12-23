import { Injectable } from '@nestjs/common';
import { MessageRepository } from '../repositories/message-repository';

interface SendMessageRequest {
  content: string,
  authorId: string,
  chatId: string
}

interface SendMessageResponse {
  id: string;
  content: string,
  authorId: string,
  chatId: string,
  date: Date
}

@Injectable()
export class SendMessage {
  constructor(
    private readonly messageRepository: MessageRepository,
  ) {}
  
  public async execute(data: SendMessageRequest): Promise<SendMessageRequest> {
    const { content, authorId, chatId } = data;
    
    return await this.messageRepository.add({
      content,
      authorId,
      chatId,
      date: new Date()
    });
  }
}