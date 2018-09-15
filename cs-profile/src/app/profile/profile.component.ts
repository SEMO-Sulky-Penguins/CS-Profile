import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  img_path: string;
  name: string;
  location: string;
  college_status: string;
  languages: string[];
  interests: string[];
  organizations: string[];
  
  constructor() { }

  ngOnInit() {
  }

}
