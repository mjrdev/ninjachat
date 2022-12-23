import { Controller, Injectable } from "@nestjs/common";
import { Message, MessageProps } from "../entities/Message";
import { PrismaService } from "../database/prisma.service";

@Injectable()
export class MessageRepository {
  constructor(private readonly prisma: PrismaService) {}
  
  async add(message: MessageProps): Promise<any> {

    const { id, content, authorId, chatId, date } = new Message(message);
    return await this.prisma.message.create({
      data: {
        id, content, authorId, chatId, date
      }
    });
  }

  async findByChatId(id: string): Promise<any> {
    return await this.prisma.message.findMany({
      where: { chatId: id },
      orderBy: { date: "asc" },
      include: {
        author: true,
      }
    });
  }
}