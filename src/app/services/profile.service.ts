import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username: string;
  private clientid = 'Iv1.98ad59c67805f83e';
  private clientsecret = '0af9d4a8ce9793c518b3cd34306174c182a04feb';

  private subject = new Subject<any>();

  sendCallBackUrl(profileUrl) {
    this.subject.next(profileUrl);
  }

  getUserDetails(): Observable<any> {
    return this.subject.asObservable();
  }

  constructor(private http: HttpClient) { }

  getProfiles(): Observable<any> {
    const URL = "https://api.github.com/search/users?q=" + this.username + "&client_id=" + this.clientid + "&client_secret=" + this.clientsecret;
    return this.http.get<any>(URL);
  }

  fetchDetails(userProfileUrl) {
    return this.http.get<any>(userProfileUrl);
  }

  setUsername(username) {
    this.username = username;
  }
}
