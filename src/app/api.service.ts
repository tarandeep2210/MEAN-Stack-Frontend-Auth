import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  messages;
  users;
  user;
  path = 'http://localhost:3000'

  constructor(private http : HttpClient) { }

  getMessages(userId){
    // this.http.get(this.path + '/posts/' + userId).subscribe((res : JSON) => {
    //   this.messages = res;
    //   console.log(res);
    //  });
    this.http.get<any>(this.path + '/posts/' + userId).subscribe((res) => {
      this.messages = res;
      console.log(res);
     });
  }

  postMessage(message){
    this.http.post(this.path + '/post' , message).subscribe((res : JSON) => {
     });
  }

  getUsers(){
    this.http.get(this.path + '/users').subscribe((res : JSON) => {
      this.users = res;
      console.log(res);
     });
  }


  getProfile(id){
    this.http.get(this.path +  `/profile/${id}`).subscribe((res : JSON) => {
      this.user = res;
      console.log(res);
     });
  }
}
