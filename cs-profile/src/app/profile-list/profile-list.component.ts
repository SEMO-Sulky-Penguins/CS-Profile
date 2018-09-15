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
        img_path: "../../assets/images/anon.jpg", name:"Stephen Sladek",
        location:"Gordonville, MO",college_status:"Senior",
        languages:"C, C++, C#, Java, JavaScript",interests:"Virtual Reality",
        organizations:"ACM-SEMO, CS Club, SIGAI"
      },
      {
        img_path: "../../assets/images/anon.jpg", name:"Anonymous",
        location:"---",college_status:"---",
        languages:"",interests:"",
        organizations:""
      },
      {
        img_path: "../../assets/images/Derek_Mandl.jpg", name:"Derek Mandl",
        location:"Manchester, MO",college_status:"Senior",
        languages:"C, C++, Java, Python",interests:"Compilers, Static Languages",
        organizations:"ACM-SEMO"
      },
      {
        img_path: "../../assets/images/anon.jpg", name:"Anonymous",
        location:"---",college_status:"---",
        languages:"",interests:"",
        organizations:""
      },
    ];
  }

  ngOnInit() {}

}
