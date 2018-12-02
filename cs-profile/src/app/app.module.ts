import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule }    from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { LoginComponent } from './login/login.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';

//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';

import { JwtModule } from '@auth0/angular-jwt';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth-guard/auth-guard.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NewprofileComponent } from './newprofile/newprofile.component';

export function tokenGetter(){
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProfileListComponent,
    LoginComponent,
    ProfileDetailComponent,
    NewprofileComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter : tokenGetter,
        whitelistedDomains: ['localhost:44305'],
        blacklistedRoutes: ['localhost:44305/auth/']
      }
    })
    /*
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
    */
  ],
  providers: [JwtHelperService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
