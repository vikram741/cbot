import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
@Component({
  selector: 'app-msgform',
  templateUrl: './msgform.component.html',
  styleUrls: ['./msgform.component.css']
})
export class MsgformComponent implements OnInit {

  constructor(private chat: ChatService,) { }
  message = "";
  ngOnInit() {
  }

  send() {
    this.message.trim();
    if (this.message == "") return;
    this.chat.pushChat(this.message)
    this.message = "";

  }
  submit(event) {
    //console.log(event.keyCode)
    if (event.keyCode === 13) {
      this.send();
    }
  }

  
  toggled: boolean = false;
  handleSelection(event) {
    console.log(event.char);
    this.message = this.message + event.char;
  }

}
