import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProfileService }  from '../profile.service';
import {Profile} from '../profile';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient/*, HttpHeaders*/ } from '@angular/common/http';
/*
let token = localStorage.getItem("jwt");
const httpOptions = {  
  headers: new HttpHeaders({
    "Authorization": "Bearer " + token,
    "Content-Type": "multipart/form-data",
  })
};
*/
@Component({
  selector: 'app-newprofile',
  templateUrl: './newprofile.component.html',
  styleUrls: ['./newprofile.component.css']
})
export class NewprofileComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private profileService: ProfileService,
    private location: Location,
    private http : HttpClient) { }

    imgUrl : string = "/assets/images/anon.jpg";
    selectedFile : File = null;
  
    ngOnInit() {}
  /*
    onFileSelected(file:FileList) {
      this.selectedFile = file.item(0);
      var reader = new FileReader();
      reader.onload = (event:any) => {
        this.imgUrl = event.target.result;
      }
  
      reader.readAsDataURL(this.selectedFile);
    }

  
    onUpload() : void {
      let url = 'https://localhost:44305/api/images';
      const formData = new FormData();
      formData.append('image', this.selectedFile, this.selectedFile.name);
      if(formData == null){
        console.log("form data is null");
      } else {
        this.http.post(url, formData).subscribe( response => {
          console.log(response);
        });
      }
      // also update the path in the profile database
    }
  

  onUpload(files) : void {
    if (files.length === 0)
      return;

    const formData = new FormData();
    const imagesURL = 'https://localhost:44305/api/images';
    console.log(imagesURL);
    for (let file of files)
      formData.append(file, file.name);

    this.http.post(imagesURL, formData, httpOptions).subscribe(response => {
      console.log(response);
    });
  }
*/
  profileForm = new FormGroup({ 
    name: new FormControl("", [Validators.required/*, Validators.pattern('[a-zA-z0-9_\.]+@[a-zA-Z]+\.[a-zA-Z]+')*/]), 
    major: new FormControl(""/*, [Validators.required, Validators.pattern('[a-zA-z0-9_\.]+@[a-zA-Z]+\.[a-zA-Z]+')]*/),
    location: new FormControl("", [Validators.required, Validators.pattern('[a-zA-z_" "\.]+, [a-zA-Z]{2}')]), 
    collegeStatus: new FormControl("", [Validators.required, Validators.pattern('[a-zA-Z]{6,}')]),
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
      profile.email = "none"; //placeholder
      profile.imgPath = "../../assets/images/anon.jpg";
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
