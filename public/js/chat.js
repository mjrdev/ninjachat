import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.esm.browser.js'
import { socket } from './socket.io.js'
import methods from './methods.js'

new Vue({
  el: '#app',
  data() {
    return {
      ninjaName: '',
      messageContent: '',
      socket,
      ninja: {
        id: 'example', name: 'example', createdAt: new Date(),
      },
      chat: {
        id:'example', name: 'example'
      },
      messages: []
    }
  },
  methods,
  mounted() {
    socket.on('event', ({ data }) => {
      console.log(data)
    })

    const url_string = window.location.href;
    const url = new URL(url_string);
    const name = url.searchParams.get("name")
    this.ninjaName = name;

    this.socket.on('connect', () => {
      this.socket.emit('connection', this.ninjaName);
    });

    this.socket.on('ninja-init', (data) => {
      const { ninja, chat, messages } = data;
      this.ninja = ninja;
      this.chat = chat;
      this.messages = messages;

      console.log(data)
    })

    this.socket.on('messages', (data) => {
      this.messages = data
    })

    document.addEventListener('keypress', (event) => {
      if (event.key == 'Enter') {
        this.sendMessage();
      }
    });
  }
})


