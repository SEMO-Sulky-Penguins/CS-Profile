import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cs-profile';
  addprofile = new FormGroup({ name: new FormControl(), 
    major: new FormControl(),
    location: new FormControl(), 
    collegestatus: new FormControl(),
    languages: new FormControl(),
    interests: new FormControl(), 
    organizations: new FormControl(),
    });
}
