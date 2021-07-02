import { Component, OnInit } from '@angular/core';
import {ChatService} from '../../services/chat.service'
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  ddd = new Date();  
  messages = [] ;
  userData={name:"user"}

  constructor(private chat : ChatService) {

    this.messages.push({   sender:"bot", text:["Welcome Coder How May I Help You ?"]   })

    chat.GetMessage.subscribe( 
      data=>{
        this.messages.push(data)
      }
     )

   }

  
  defaultImage = '../../assets/default.jpg'
  loadingImage = '../../assets/loading.gif'
  ngOnInit() { 
  }
  
  
}
 