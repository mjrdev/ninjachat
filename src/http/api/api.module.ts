import { Module } from '@nestjs/common';
import { DbModule } from '../database/db.module';
import { PrismaService } from '../database/prisma.service';
import { ChatRepository } from '../repositories/chat-repository';
import { MessageRepository } from '../repositories/message-repository';
import { ApiController } from './api.controller';

@Module({
  imports: [DbModule],
  controllers: [ApiController],
  providers: [PrismaService, ChatRepository, MessageRepository],
})
export class ApiModule {}
