import { Injectable } from '@angular/core';
import { Observable, from, Subject } from 'rxjs';
// import * as io from 'socket.io-client';
// import * as jwt from 'jsonwebtoken';
// import { Socket } from 'ngx-socket-io';
import {Router} from '@angular/router';
import {  HttpClient } from '@angular/common/http';
import * as AWSSDK from 'aws-sdk';

@Injectable({
  providedIn: 'root'
})

export class ChatService {

  CloseChat = new Subject<any>();
  GetMessage = new Subject<any>();

  sessionAttributes = {};
  lexRuntime: AWSSDK.LexRuntime;
  lexUserId = '537919193221' + Date.now(); // Client application userID

  constructor(){
    AWSSDK.config.region = 'us-west-2'; // Region
  AWSSDK.config.credentials = new AWSSDK.CognitoIdentityCredentials({
     IdentityPoolId: "us-west-2:f2737e01-c665-4c4d-97a2-b669fbc12323", //your Identity poolId,
  });
  this.lexRuntime = new AWSSDK.LexRuntime({
    credentials: {
      accessKeyId:"AKIAX2PT3QCC2MH2M2F4",
      secretAccessKey: "9cZZkr7ZbP9jTu9IW774az3LSGWCIeSQ2IF9YOZ3",
    }
  });
  }


  public pushChat(chatInput: any) {
    if (chatInput !== '') {
      this.GetMessage.next({sender:"user",text: chatInput })

    const params = {
        botAlias: '$LATEST', //
        botName: 'VirtualLabAssistant', // your chatbot name
        userId: this.lexUserId,
        inputText: chatInput,
        sessionAttributes: this.sessionAttributes
    };
    this.lexRuntime.postText(params, (err, data:any) => {
        if (err) {
           console.log(err, err.stack);
        }
        if (data) {
           this.sessionAttributes = data.sessionAttributes;
          //  this.chatMessages.push({Owner: 'Chatbot', Message: data.message});
          console.log(typeof(data.message))

          var x:{ messages:[{type:string ,value:string ,group:string}] }
          try{
           x = JSON.parse(data.message)
          }
          catch(err)
          {
            this.GetMessage.next({sender:"bot",text:[data.message]})
            return
          }            
            for(let i=0;i<x.messages.length;i++ ){
                if(x.messages[i].type =="PlainText")
                {
                  this.GetMessage.next({sender:"bot",text:[x.messages[i].value]})
                }
                else{
                  var arr = x.messages[i].value.split("\n")                  
                    this.GetMessage.next({sender:"bot",text:arr})                  
                }
            }
          
        }
    });
 }
}

}