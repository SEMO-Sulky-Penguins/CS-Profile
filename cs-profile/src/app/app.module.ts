import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule }    from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';

import { JwtModule } from '@auth0/angular-jwt';
import { RouterModule } from '@angular/router';
//import { AuthGuard } from './auth-guard/auth-guard.service';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter : tokenGetter,
        whitelistedDomains: ['localhost:44305'],
        blacklistedRoutes: ['localhost:44305/auth/']
      }
    }),
    RouterModule.forRoot([
      {path:'',component:ProfileListComponent},
      {path: 'login', component: LoginComponent}
      //{path:'profile-details',component: ProfileDetailComponent, canActivate: [AuthGuard]}
    ])
    /*
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
    */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
