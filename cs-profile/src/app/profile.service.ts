import { Injectable } from '@angular/core';
import {Profile} from './profile';
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
  private profilesURL = 'http://localhost:5000/api/profile';

  constructor(private http: HttpClient, 
    private messageService : MessageService) {  }

  private log(message: string) {
    this.messageService.add(`ProfileService: ${message}`);
  }

  getProfiles(): Observable<Profile[]>{
    return this.http.get<Profile[]>(this.profilesURL, httpOptions)
  }

  getProfile(id : number): Observable<Profile>{
    //const url = `${this.profilesURL}/${id}`;
    return this.http.get<Profile>(this.profilesURL+ '/' + id, httpOptions);
  }
}
