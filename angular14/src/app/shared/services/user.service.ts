import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../helpers/appSettings';

const API_URL = AppSettings.API_URL + 'user/';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }
  
  getPublicContent(): Observable<any> {
    return this.http.get(API_URL , { responseType: 'text' })
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' })
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'moderator', { responseType: 'text' })
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' })
  }
}