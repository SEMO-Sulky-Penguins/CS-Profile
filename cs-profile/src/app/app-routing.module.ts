import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ProfileListComponent} from './profile-list/profile-list.component';
import { LoginComponent} from './login/login.component';


const routes: Routes = [ 
  {path: '', redirectTo: 'profiles', pathMatch: 'full' },
  { path: 'profiles/:id', component:  ProfileComponent  },
  { path: 'login', component:  LoginComponent  },
  { path: 'profiles', component:  ProfileListComponent  }
 ];

@NgModule({
imports: [ RouterModule.forRoot(routes) ],
exports: [ RouterModule ]
})
export class AppRoutingModule { }
