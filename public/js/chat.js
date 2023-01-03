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
      messages: [],
      chatState: {
        message: "",
        debounce: null
      }
    }
  },
  methods,
  computed: {
  },
  mounted() {

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

      setTimeout(() => {
        const content = document.querySelector('.content')
        document.querySelector('.loading-page').style.display = 'none';
        
        content.scrollTo(0, content.scrollHeight)
      }, 500)
    })

    this.socket.on('messages', (data) => {
      this.messages = data;

      setTimeout(() => {
        const content = document.querySelector('.content')
        content.scrollTo(0, content.scrollHeight)
      }, 30)
    })

    this.socket.on('writing', (ninja) => {
      if(ninja == this.ninja.name) return
      if (this.chatState.debounce) {
        clearTimeout(this.chatState.debounce);
      }

      this.chatState.debounce = setTimeout(() => this.chatState.message = "", 1000)
      this.chatState.message = ninja + ' is typing...'
    })

    document.addEventListener('keypress', (event) => {
      if (event.key == 'Enter') {
        this.sendMessage();
      }
    });
  }
})


