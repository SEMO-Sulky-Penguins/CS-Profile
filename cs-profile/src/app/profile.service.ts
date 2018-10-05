import { Injectable } from '@angular/core';
import {Profile} from './profile';
import {PROFILES} from './mock-profiles';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  getProfiles(): Observable<Profile[]> {
    return of(PROFILES);
  }

  getProfile(id: number): Observable<Profile> {
    return of(PROFILES.find(profile => profile.id === id));
  }
}
