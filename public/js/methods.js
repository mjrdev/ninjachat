export default {
  sendMessage() {
    this.addMessage(this.messageContent);
    this.socket.emit('send-message', {
      content: this.messageContent,
      authorId: this.ninja.id,
      chatId: this.chat.id
    });
  },

  addMessage(message) {
    this.messages.push({
      id: 'await for server response',
      content: message,
      date: new Date(),
      authorId: this.ninja.id,
      chatId: this.chat.id,
      author: { name: this.ninja.name }
    })
  }
}