import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  

  constructor(private apiService : ApiService , private route : ActivatedRoute) {
    var id = this.route.snapshot.params.id;
    console.log(id);
    this.apiService.getProfile(id);
   }

  ngOnInit() {
    
    // this.apiService.getProfile(id).subscribe((data) => {
    //   this.profile = data;
    //   console.log(data);
    // });

    
  }

}
