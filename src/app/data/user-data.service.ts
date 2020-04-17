import { Injectable } from '@angular/core';
import {UserSettings} from './user-settings';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http: HttpClient) { }

  postUserSettings(userSettings: UserSettings): Observable<UserSettings> {
    return this.http.post<UserSettings>('https://putsreq.com/mMDYa4uxFfCggy2suEYR', userSettings);
    // return of(userSettings);
  }

  getSubscriptionTypes(): Observable<string[]> {
    return of(['Monthly', 'Annual', 'Lifetime']);
  }
}
