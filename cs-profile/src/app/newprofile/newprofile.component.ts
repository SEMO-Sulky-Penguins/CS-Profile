import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProfileService }  from '../profile.service';
import {Profile} from '../profile';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-newprofile',
  templateUrl: './newprofile.component.html',
  styleUrls: ['./newprofile.component.css']
})
export class NewprofileComponent implements OnInit {
  
  //@Input() profile: Profile;

  constructor(private route: ActivatedRoute,
    private profileService: ProfileService,
    private location: Location) { }

  ngOnInit() {}
  
  profileForm = new FormGroup({ 
    name: new FormControl("", [Validators.required/*, Validators.pattern('[a-zA-z0-9_\.]+@[a-zA-Z]+\.[a-zA-Z]+')*/]), 
    major: new FormControl(""/*, [Validators.required, Validators.pattern('[a-zA-z0-9_\.]+@[a-zA-Z]+\.[a-zA-Z]+')]*/),
    location: new FormControl("", [Validators.required, Validators.pattern('[a-zA-z_" "\.]+, [a-zA-Z]{2}')]), 
    collegeStatus: new FormControl("", [Validators.required, Validators.pattern('.{6,}')]),
    languages: new FormControl(""/*, [Validators.required/*, Validators.pattern('[a-zA-z0-9_\.]+@[a-zA-Z]+\.[a-zA-Z]+')]*/),
    interests: new FormControl(""/*, [Validators.required/*, Validators.pattern('[a-zA-z0-9_\.]+@[a-zA-Z]+\.[a-zA-Z]+')]*/), 
    organizations: new FormControl(""/*, [Validators.required/*, Validators.pattern('[a-zA-z0-9_\.]+@[a-zA-Z]+\.[a-zA-Z]+')]*/),
  });
    
  goBack(): void {
    this.location.back();
  }

  save(): void {
    try{
      let profile = new Profile;
      profile.name = this.getValue("name");
      profile.major = this.getValue("major");
      profile.location = this.getValue("location");
      profile.collegeStatus = this.getValue("collegeStatus");
      profile.languages = this.getValue("languages");
      profile.interests = this.getValue("interests");
      profile.organizations = this.getValue("organizations");
      this.profileService.addProfileAuth(profile);
      //.subscribe();
      alert("Profile created!");
    }
    catch(e){
      console.log("profile creation error:\n" + e);
    }
  }

  getValue(field : any) : string{
    if(this.profileForm.controls[field].value != null){
      return this.profileForm.controls[field].value.toString();
    } else {
      return "none";
    }
  }

}
