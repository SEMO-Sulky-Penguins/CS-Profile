//import { Component, OnInit } from '@angular/core';
import {Profile} from '../profile';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ProfileService }  from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() profile: Profile;
  
  constructor(  private route: ActivatedRoute,
    private profileService: ProfileService,
    private location: Location) { }

  ngOnInit() {
    this.getProfile();
  }

  getProfile(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.profileService.getProfile(id)
      .subscribe(profile => this.profile = profile)
  }
}
