import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {Profile} from '../profile';
import {ProfileService} from '../profile.service';
import { JwtHelperService } from '@auth0/angular-jwt';

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
    private location: Location,
    private jwtHelper: JwtHelperService) {}

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

  isUserAuthenticated() {
    let token: string = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      console.log(this.jwtHelper.decodeToken(token));
      return true;
    }
    else {
      return false;
    }
  }

}
