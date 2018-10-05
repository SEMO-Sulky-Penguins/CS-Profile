import { Component, OnInit } from '@angular/core';
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

  constructor(private profileService: ProfileService) {}

  getProfiles(): void {
    this.profileService.getProfiles()
    .subscribe(profiles => this.profiles = profiles);
  }

  ngOnInit() {
    this.getProfiles()
  }

  onSelect(profile: Profile): void {
    this.selectedProfile = profile;
  }

}
