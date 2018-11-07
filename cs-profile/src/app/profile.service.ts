import { Injectable } from '@angular/core';
import {Profile} from './profile';
//import {PROFILES} from './mock-profiles';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';

import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from './auth-guard/auth-guard.service';
import { JwtHelperService } from '@auth0/angular-jwt';

let token =  localStorage.getItem("jwt");
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
    private messageService : MessageService) {  }

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
      return this._http.put(url, profile, httpOptions);//.pipe(  
     // tap(_ => this.log(`updated hero id=${hero.id}`)),
      //tap(_ => this.log(`updated hero id=${id}`)),
      //catchError(this.handleError<any>('updateHero'))
    //);
  }
/*
  isUserAuthenticated() {
    let token: string = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      console.log(this.jwtHelper.decodeToken(token));
      return true;
    }
    else {
      return false;
    }
  }
*/

/*let token = localStorage.getItem("jwt");
    this.http.get("https://localhost:44305/api/profiles", {
      headers: new HttpHeaders({
        "Authorization": "Bearer " + token,
        "Content-Type": "application/json"
      })
    }).subscribe(response => {
      this.profiles = response;
    }, err => {
      console.log(err)
    });
    */
}
