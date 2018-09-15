import { Component, OnInit } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {
  profiles: Object[];

  constructor() { 
    this.profiles = [
      {
        img_path: "../../assets/images/temp.png", name:"Stephen Sladek",
        location:"Gordonville, MO",college_status:"Senior",
        languages:"C, C++, C#, Java, JavaScript",interests:"Virtual Reality",
        organizations:"ACM-SEMO, CS Club, SIGAI"
      },
      {
        img_path: "../../assets/images/temp.png", name:"",
        location:"",college_status:"",
        languages:"",interests:"",
        organizations:""
      },
      {
        img_path: "../../assets/images/temp.png", name:"",
        location:"",college_status:"",
        languages:"",interests:"",
        organizations:""
      },
    ];
  }

  ngOnInit() {}

}
