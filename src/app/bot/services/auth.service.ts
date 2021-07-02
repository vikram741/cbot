import { Injectable } from '@angular/core';
import  {HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { ChatService } from './chat.service';
import {
  AuthService,
  GoogleLoginProvider
} from 'angular-6-social-login';
 
@Injectable({
  providedIn: 'root'
})
export class AppAuthService {
  
  userData : {name:string , email:string , photoURL:string} ;

  constructor(private http :HttpClient,private socialAuthService: AuthService ,
    private chat:ChatService, private router:Router){

  }
  
  getuserdata(userdata:any)
  {
    this.userData.name = userdata.name;
    this.userData.email = userdata.email;
    this.userData.photoURL = userdata.image;
   // console.log(this.userData)
  }

  login()
  {
    this.socialAuthService.signIn (GoogleLoginProvider.PROVIDER_ID).then(
      (userData) => {
        //nodemon app.jsconsole.log(" sign in data : " , userData);

       // this.chat.getuserdata(userData)
        this.router.navigate(["/room"]);
        console.log(userData)
        
      }
    );
  }


}