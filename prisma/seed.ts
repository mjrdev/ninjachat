import { PrismaClient } from '@prisma/client'
import { randomUUID } from 'node:crypto'

const prisma = new PrismaClient()

async function main() {
  const uuidChat = randomUUID();
  const mainChat = await prisma.chat.upsert({
    where: {
      id: uuidChat
    },
    update: {},
    create: {
      id: uuidChat,
      name: 'main chat'
    },
  })

  console.log(mainChat)
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })