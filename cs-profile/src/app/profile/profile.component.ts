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
  profiles : Profile[];

  constructor(  private route: ActivatedRoute,
    private profileService: ProfileService,
    private location: Location) { }

  ngOnInit() {
    this.getProfiles();
  }
  /*
  getProfiles(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.profileService.getProfiles(id)
      .subscribe(profile => this.profile = profile)
  }
  */
  getProfiles() : void {
    this.profileService.getProfiles()
    .subscribe(profiles => this.profiles = profiles);
  }
}
