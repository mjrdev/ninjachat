import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { DbModule } from './database/db.module';
import { PrismaService } from './database/prisma.service';
import { NinjaRepository } from './repositories/ninja-repository';
import { HttpController } from './http.controller';
import { MessageRepository } from './repositories/message-repository';
import { ChatRepository } from './repositories/chat-repository';
import { CreateNinja } from '@use/create-ninja';

@Module({
  imports: [DbModule],
  controllers: [HttpController],
  providers: [PrismaService, CreateNinja, MessageRepository],
})
export class HttpModule {}
