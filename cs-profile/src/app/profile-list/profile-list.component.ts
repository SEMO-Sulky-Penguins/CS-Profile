import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {Profile} from '../profile';
import {ProfileService} from '../profile.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {

  selectedProfile: Profile;

  profiles: Profile[];

  constructor(
    private route : ActivatedRoute,
    private profileService: ProfileService,
    private location: Location) {}

  getProfiles(): void {
    this.profileService.getProfiles()
    .subscribe(profiles => this.profiles = profiles);
  }
  /*
  getProfile : void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.profileService.getProfile(id)
    .subscribe(profile => this.profile = profile);
  }
  */
  ngOnInit() {
    this.getProfiles()
  }

  onSelect(profile: Profile): void {
    this.selectedProfile = profile;
  }

}
