import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileListComponent } from './profile-list/profile-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProfileListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
