import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

//material

import { MatButtonModule, MatCardModule , MatToolbarModule , MatInputModule ,MatListModule } from '@angular/material';

import {ApiService} from './api.service';
import {AuthService} from './auth.service';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component';
import { PostComponent } from './post/post.component';
import { AuthInterceptorService } from './authInterceptor.service';


const routes =[

  { path : '' , component : PostComponent},
  { path : 'register' , component : RegisterComponent},
  { path : 'login' , component : LoginComponent},
  { path : 'users' , component : UsersComponent},
  { path : 'profile/:id' , component : ProfileComponent},

];
@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    RegisterComponent,
    LoginComponent,
    UsersComponent,
    ProfileComponent,
    PostComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule ,HttpClientModule , FormsModule, RouterModule.forRoot(routes)
    , MatButtonModule , MatCardModule , MatToolbarModule , MatInputModule , MatListModule
  ],
  providers: [ApiService , AuthService , { provide : HTTP_INTERCEPTORS , useClass : AuthInterceptorService , multi : true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
