import { Controller, Injectable } from "@nestjs/common";
import { Chat, ChatProps } from "../entities/Chat";
import { PrismaService } from "../database/prisma.service";

@Injectable()
export class ChatRepository {
  constructor(private readonly prisma: PrismaService) {}
  
  async create(chat: ChatProps): Promise<any> {

    const { id, name } = new Chat(chat);
    return await this.prisma.chat.create({
      data: {
        id, name
      }
    });
  }

  async show(): Promise<any> {

    // const { id, name } = new Chat(chat);
    return await this.prisma.chat.findFirst();
  }
}