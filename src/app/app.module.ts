import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule}  from '@angular/forms';
import  { NgxEmojiPickerModule  }  from  'ngx-emoji-picker';
import {HttpClientModule} from '@angular/common/http'

import { LazyLoadImageModule } from 'ng-lazyload-image';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { BotComponent } from './bot/bot.component';
import { MsgformComponent } from './bot/room/msgform//msgform.component';
import { FeedComponent } from './bot/room/feed/feed.component';
import { RoomComponent } from './bot/room/room.component';

import { ChatService} from './bot/services/chat.service';
import {AppAuthService} from './bot/services/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    MsgformComponent,
    FeedComponent,
    RoomComponent,
    BotComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    HttpClientModule,
    LazyLoadImageModule,
    NgxEmojiPickerModule.forRoot(),
    BrowserAnimationsModule,
    MatSnackBarModule,
    ],
  providers: [AppAuthService,ChatService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
