import { Injectable } from '@angular/core';
import {Profile} from './profile';
//import {PROFILES} from './mock-profiles';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';

import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from './auth-guard/auth-guard.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

let token = localStorage.getItem("jwt");
const httpOptions = {  
  headers: new HttpHeaders({
    "Authorization": "Bearer " + token,
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //private _url = "/assets/data/profiles.json";
  //private profilesURL = 'api/profiles';
  //private identity : string;
  private profilesURL = 'https://localhost:44305/api/profiles';
  
  constructor(private _http: HttpClient, 
    private messageService : MessageService,
    private jwtHelper: JwtHelperService) {  }
  
  private log(message: string) {
    this.messageService.add(`ProfileService: ${message}`);
  }

  getProfiles(): Observable<Profile[]>{
    return this._http.get<Profile[]>(this.profilesURL, httpOptions);
  }

  getProfile(id : number): Observable<Profile>{
    const url = `${this.profilesURL}/${id}`;
    return this._http.get<Profile>(url);
  }

/*
  getProfiles(): Observable<Profile[]> {
    //return of(PROFILES);
  }

  getProfile(id: number): Observable<Profile> {
    this.identity = id.toString().trim();
    const params = new HttpParams().set('id', this.identity);
    return this._http.get<Profile>(this._url, {params});
    
    return of(PROFILES.find(profile => profile.id === id));
  }
*/

  /** PUT: update the hero on the server */
  updateProfile (profile: Profile | number): Observable<any> {
    const id = typeof profile === 'number' ? profile : profile.id;
    const url = `${this.profilesURL}/${id}`;

    //return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
    return this._http.put(url, profile, httpOptions);
    //.pipe(  
    //tap(_ => this.log(`updated hero id=${hero.id}`)),
    //tap(_ => this.log(`updated hero id=${id}`)),
    //catchError(this.handleError<any>('updateHero'))
    //);
  }

  updateProfileAuth(profile: Profile | number) : void {
    const id = typeof profile === 'number' ? profile : profile.id;
    const url = `${this.profilesURL}/${id}`;
    console.log("passing value: " + id + " to " + url);
    this._http.put(url, profile, httpOptions).subscribe(response => {
      console.log(response);
    }, err => {
      console.log(err)
    });
  }

  /** POST: add a new profile to the server */
  addProfile (profile: Profile): Observable<Profile> {
    return this._http.post<Profile>(this.profilesURL, profile, httpOptions);
  }
  
  addProfileAuth(profile: Profile) : void {
    this._http.post<Profile>(this.profilesURL, profile, httpOptions).subscribe(response => {
      console.log(response);
    }, err => {
      console.log(err);
    });
  }

  deleteProfileAuth(id: number): void{
    const url = `${this.profilesURL}/${id}`;
    console.log("deleting profile: " + url);
    this._http.delete(url, httpOptions).subscribe(response => {
      console.log(response);
    }, err =>{
      console.log(err);
    });
  }
  
}
