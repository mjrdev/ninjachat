import { Module } from '@nestjs/common';
import { DbModule } from './database/db.module';
import { PrismaService } from './database/prisma.service';
import { HttpController } from './http.controller';
import { MessageRepository } from './repositories/message-repository';
import { CreateNinja } from '@use/create-ninja';

@Module({
  imports: [DbModule],
  controllers: [HttpController],
  providers: [PrismaService, CreateNinja, MessageRepository],
})
export class HttpModule {}
