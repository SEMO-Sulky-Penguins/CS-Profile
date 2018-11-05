//import { Component, OnInit } from '@angular/core';
import {Profile} from '../profile';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ProfileService }  from '../profile.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() profile: Profile;
  profiles: any;
  //profiles : Profile[];

  constructor(  private route: ActivatedRoute,
    private profileService: ProfileService,
    private http: HttpClient) { }

  ngOnInit() {
    let token = localStorage.getItem("jwt");
    this.http.get("https://localhost:44305/api/profiles", {
      headers: new HttpHeaders({
        "Authorization": "Bearer " + token,
        "Content-Type": "application/json"
      })
    }).subscribe(response => {
      this.profiles = response;
    }, err => {
      console.log(err)
    });

    this.getProfile();
  }
  
  getProfile(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.profileService.getProfile(id)
      .subscribe(profile => this.profile = profile)
  }
  
 /*
  getProfile(id : number) : void {
    this.profileService.getProfile(id)
    .subscribe(profiles => this.profiles = profiles);
  }
  */
}
