import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from './auth-guard/auth-guard.service';
import { JwtHelperService } from '@auth0/angular-jwt';

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
