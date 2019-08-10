import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postMsg = ''
  constructor(private apiService : ApiService) { }

  ngOnInit() {
  }

  post(){
    // console.log(this.postMsg);
    this.apiService.postMessage({ msg : this.postMsg });
  }
}
