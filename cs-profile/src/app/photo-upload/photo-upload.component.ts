import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

let token = localStorage.getItem("jwt");
const httpOptions = {  
  headers: new HttpHeaders({
    "Authorization": "Bearer " + token,
    'Content-Type': 'application/json'
  })
};

@Component({
  selector: 'app-photo-upload',
  templateUrl: './photo-upload.component.html',
  styleUrls: ['./photo-upload.component.css']
})

export class PhotoUploadComponent implements OnInit {

  imgUrl : string = "/assets/images/anon.jpg";
  selectedFile : File = null;

  constructor( private http : HttpClient) { }
  ngOnInit() {}

  onFileSelected(file:FileList) {
    this.selectedFile = file.item(0);
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imgUrl = event.target.result;
    }

    reader.readAsDataURL(this.selectedFile);

  }

  onUpload() {
    let url = 'https://localhost:44305/api/images';
    const formData = new FormData();
    formData.append('image', this.selectedFile, this.selectedFile.name);
    this.http.post(url, formData, httpOptions).subscribe( response => {
      console.log(response);
    });
    // also update the path in the profile database
  }

}
