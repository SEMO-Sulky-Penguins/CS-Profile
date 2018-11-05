import { Injectable } from '@angular/core';
import {Profile} from './profile';
//import {PROFILES} from './mock-profiles';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //private _url = "/assets/data/profiles.json";
  //private profilesURL = 'api/profiles';
  //private identity : string;
  private profilesURL = 'http://localhost:65064/api/profiles';
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

}
