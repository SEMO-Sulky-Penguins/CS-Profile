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
  //profiles : Profile[];

  constructor(  private route: ActivatedRoute,
    private profileService: ProfileService,
    private http: HttpClient,
    private location: Location) { }

  ngOnInit() {
    this.getProfile();
  }
  
  goBack(): void {
    this.location.back();
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
