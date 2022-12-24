import { SubscribeMessage, MessageBody, WebSocketGateway, WebSocketServer, ConnectedSocket } from "@nestjs/websockets";
import { CreateNinja } from "@use/create-ninja";
import { CreateWorkspace } from "@use/create-workspace";
import { SendMessage } from "@use/send-message";
import { Socket } from 'socket.io';
import { MessageProps } from "src/http/entities/Message";
import { MessageRepository } from "src/http/repositories/message-repository";

@WebSocketGateway()
export class ChatGateway {
  @WebSocketServer()
  server: Socket;

  constructor(
    private createWorkspace: CreateWorkspace,
    private sendMessage: SendMessage,
    private messageRepository: MessageRepository
  ) {}

  @SubscribeMessage('connection')
  async connection(@ConnectedSocket() client: Socket, @MessageBody() name: string): Promise<any> {
    console.log('nova conexão' + name)
    if (name.length === 0) {
      return this.server.emit('error', 'Ninja name não informado.');
    }

    const workspaceProps = {
      ninja: {
        name,
      },
      chat: { name: 'none'}
    }
    const { ninja, chat, messages } = await this.createWorkspace.execute(workspaceProps)

    client.emit('ninja-init', { ninja, chat, messages })
  }

  @SubscribeMessage('send-message')
  async reqMessage(@ConnectedSocket() client: Socket, @MessageBody() message: MessageProps): Promise<any> {

    const { content, authorId, chatId } = message;

    await this.sendMessage.execute({
      content, authorId, chatId
    })

    console.log(chatId);
    
    const messages = await this.messageRepository.findByChatId(chatId)

    this.server.emit('messages', messages)
  }
}
