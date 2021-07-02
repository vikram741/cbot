import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: 'login', component: LoginComponent   }, //canActivate: [AuthGuard]
  // { path: 'room', component: RoomComponent}//  resolve: { data: UserResolver}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
