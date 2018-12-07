import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ProfileListComponent} from './profile-list/profile-list.component';
import { LoginComponent} from './login/login.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';

import { AuthGuard } from './auth-guard/auth-guard.service';
import { NewprofileComponent } from './newprofile/newprofile.component';
/*
RouterModule.forRoot([
  {path:'',component:ProfileListComponent},
  {path: 'login', component: LoginComponent},
  {path:'profile-details',component: ProfileDetailComponent, canActivate: [AuthGuard]}
])
*/

const routes: Routes = [ 
  {path: '', redirectTo: 'profiles', pathMatch: 'full' },
  { path: 'profiles/:id', component:  ProfileComponent  },
  { path: 'login', component:  LoginComponent  },
  { path: 'addprofile', component:  NewprofileComponent, canActivate: [AuthGuard] },
  { path: 'detail/:id', component:  ProfileDetailComponent, canActivate: [AuthGuard] },
  { path: 'profiles', component:  ProfileListComponent  }
 ];

@NgModule({
imports: [ RouterModule.forRoot(routes) ],
exports: [ RouterModule ]
})
export class AppRoutingModule { }
