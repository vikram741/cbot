import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {ChatService} from '../services/chat.service';
@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  @ViewChild('scroller', {static: false}) feedcontainer: ElementRef;
  constructor(private chat : ChatService) { }

  ngOnInit() {
  }

  ngAfterViewChecked()
  { 
    this.scrolltoBottom();
  }

  scrolltoBottom():void{
    this.feedcontainer.nativeElement.scrollTop = this.feedcontainer.nativeElement.scrollHeight;
  }

  toggle = false;
  toggleUsersList(x)
  {
      this.toggle = !this.toggle;
      //x.classList.toggle("change");
  }

  closeChat(){
    this.chat.CloseChat.next({status:true})
  }

}
