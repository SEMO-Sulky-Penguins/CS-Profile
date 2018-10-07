import { Injectable } from '@angular/core';

import {Profile} from './profile';
import {PROFILES} from './mock-profiles';
import { Observable, of } from 'rxjs';

import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
//private _url = "/assets/data/profiles.json";

  constructor(private _http: HttpClient) {  }

  getProfiles(): Observable<Profile[]> {
    //this works:
    //return this._http.get<Profile[]>(this._url);
    return of(PROFILES);
  }

  //I'm not sure how to use httpget to grab profile by id;
  //Commented out is my attempt
  getProfile(id: number): Observable<Profile> {
    //this does not work:
    //var identity = id.toString().trim();
    //const params = new HttpParams().set('id', identity);
    //return this._http.get<Profile>(this._url, {params});
    return of(PROFILES.find(profile => profile.id === id));
  }
}
