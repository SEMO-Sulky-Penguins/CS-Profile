import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProfileService }  from '../profile.service';
import {Profile} from '../profile';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-newprofile',
  templateUrl: './newprofile.component.html',
  styleUrls: ['./newprofile.component.css']
})
export class NewprofileComponent implements OnInit {
  @Input() profile: Profile;
  constructor(private route: ActivatedRoute,
    private profileService: ProfileService,
    private location: Location) { }

  ngOnInit() {
  }
  addprofile = new FormGroup({ name: new FormControl(), 
    major: new FormControl(),
    location: new FormControl(), 
    collegestatus: new FormControl(),
    languages: new FormControl(),
    interests: new FormControl(), 
    organizations: new FormControl(),
    });
  goBack(): void {
    this.location.back();
  }
  
  save(): void {
    this.profileService.addProfile(this.profile);
  }
}
