//import { Component, OnInit } from '@angular/core';
import {Profile} from '../profile';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ProfileService }  from '../profile.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';

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

  delete(){
    this.profileService.deleteProfileAuth(this.profile.id);
  }

  arrayify(nonArrayString: string): Array<string>{
    var temp = nonArrayString.split(",");
    for(let i = 0; i < temp.length; i++){
      temp[i] = temp[i].trim();
    }
    return temp;
  }

  displayToggle(id) : void {
    let el = document.getElementById(id);
    el.style.display = (el.style.display == "none") ? "block" : "none";
  }
  
  sendMail() : void{
    try{
      var name = encodeURI(document.forms["signUp"]["name"].value);
      var fromEmail = encodeURI(document.forms["signUp"]["email"].value);
      var msg = encodeURI(document.forms["signUp"]["msg"].value);
      var body = "Name: " + name + "%0D%0A" + "Email: " + fromEmail + "%0D%0A" + msg;
      var mail = "mailto:" + this.profile.email + "?subject=Message from CS-Profile&body=" + body;
      window.location.href = mail;
      this.displayToggle('contact');
    } catch(e) {
      console.log(e);
    }
  }

 /*
  getProfile(id : number) : void {
    this.profileService.getProfile(id)
    .subscribe(profiles => this.profiles = profiles);
  }
  */
}
