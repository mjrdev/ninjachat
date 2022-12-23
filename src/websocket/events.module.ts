import { Module } from "@nestjs/common";
import { CreateNinja } from "@use/create-ninja";
import { CreateWorkspace } from "@use/create-workspace";
import { SendMessage } from "@use/send-message";
import { PrismaService } from "src/http/database/prisma.service";
import { ChatRepository } from "src/http/repositories/chat-repository";
import { MessageRepository } from "src/http/repositories/message-repository";
import { NinjaRepository } from "src/http/repositories/ninja-repository";
import { ChatGateway } from "./events.gateway"

@Module({
  providers: [
    ChatGateway,
    NinjaRepository, ChatRepository, MessageRepository,
    PrismaService,
    CreateNinja, CreateWorkspace, SendMessage
  ]
})
export class EventsModule {}