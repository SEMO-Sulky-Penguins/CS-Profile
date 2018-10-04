import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ProfileListComponent} from './profile-list/profile-list.component';

const routes: Routes = [ 
  {path: '', component: ProfileListComponent},
  { path: 'profile', component:  ProfileComponent  },
  { path: 'profilelist', component:  ProfileListComponent  }
 ];

@NgModule({
imports: [ RouterModule.forRoot(routes) ],
exports: [ RouterModule ]
})
export class AppRoutingModule { }
