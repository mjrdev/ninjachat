export default {
  sendMessage() {
    this.addMessage(this.messageContent);
    this.socket.emit('send-message', {
      content: this.messageContent,
      authorId: this.ninja.id,
      chatId: this.chat.id
    });

    this.messageContent = "";
  },

  async addMessage(message) {
    if(message.length == 0) return;
    await this.messages.push({
      id: 'await for server response',
      content: message,
      date: new Date(),
      authorId: this.ninja.id,
      chatId: this.chat.id,
      author: { name: this.ninja.name }
    })

    setTimeout(() => {
      const content = document.querySelector('.content')
      content.scrollTo(0, content.scrollHeight)
    }, 30)

  },

  writing() {
    this.socket.emit('writing', this.ninja.name)
  },

  formattingDate(date) {
    const hors = date.split('T')[1].split('.')[0].split(':')
    return `${hors[0]}:${hors[1]}`
  }
}