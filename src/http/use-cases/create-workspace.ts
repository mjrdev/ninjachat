import { Injectable } from '@nestjs/common';
import { Chat } from '../entities/Chat';
import { Message } from '../entities/Message';
import { Ninja } from '../entities/Ninja';
import { ChatRepository } from '../repositories/chat-repository';
import { MessageRepository } from '../repositories/message-repository';
import { NinjaRepository } from '../repositories/ninja-repository';

interface NinjaAndChatRequest {
  name: string
}

interface WorkSpaceRequest {
  ninja: NinjaAndChatRequest, chat: NinjaAndChatRequest
}

interface WorkSpaceResponse {
  ninja: Ninja;
  chat: Chat;
  messages: Message[]
}

@Injectable()
export class CreateWorkspace {
  constructor(
    private readonly chatRepository: ChatRepository,
    private readonly ninjaRepository: NinjaRepository,
    private readonly messageRepository: MessageRepository,
  ) {}
  
  async execute(request: WorkSpaceRequest): Promise<WorkSpaceResponse> {
      
    const chat = await this.chatRepository.show();
    const ninja = await this.ninjaRepository.createIfNotFound(new Ninja({ name: request.ninja.name, createdAt: new Date() }));
    const messages = await this.messageRepository.findByChatId(chat.id)

    return {
      ninja, chat, messages
    }
  }
}