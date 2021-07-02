import { Component, OnInit } from '@angular/core';

import { ChatService } from './services/chat.service';
@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.css']
})
export class BotComponent implements OnInit {

  chatOpen = false;

  constructor(private chat:ChatService) { 
    chat.CloseChat.subscribe(
      data=>{
        this.closeChat()
      })
  }

  ngOnInit() {
  }

  openChat(){
    this.chatOpen = true;
  }
  closeChat(){
    this.chatOpen = false;
  }

}
