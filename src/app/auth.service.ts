import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  messages;
  path = 'http://localhost:3000/auth'

  constructor(private http : HttpClient) { }


  getToken(){
    return localStorage.getItem('token')
  }

  get isAuthenticated(){
    return !!localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
  }

  getMessages(){
    this.http.get(this.path + '/posts').subscribe((res : JSON) => {
      this.messages = res;
      console.log(res);
     });
  }

  registerUser(registerData){
    this.http.post<any>(this.path + '/register',registerData).subscribe((res)=>{ 
      console.log(res);
      localStorage.setItem('token' , res.token);
      });
  }

  loginUser(loginData){
    this.http.post(this.path + '/login',loginData).subscribe((res)=>{ 
      console.log(res);
      localStorage.setItem('token' , JSON.parse(JSON.stringify(res)).token);
    });
  }
}
