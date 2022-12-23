import { randomUUID } from "crypto";
import { Chat, ChatProps } from "./Chat"

describe('Chat entity', () => {

  const message = [
    { message: 'Hello!', who: 'seeder', date: new Date() },
    { message: 'How are you?', who: 'recipient', date: new Date() }
  ]

  it('should create an entity', () => {
    const props: ChatProps = {
      id: randomUUID(),
      seeder: randomUUID(),
      recipient: randomUUID(),
      messages: JSON.stringify(message)
    }

    const chat = new Chat(props);

    expect(chat).toBeInstanceOf(Chat);
    expect(chat.seeder).toEqual(props.seeder);
    expect(chat.id).toBeDefined(); 
  })
})