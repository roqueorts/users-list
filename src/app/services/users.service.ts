import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from '../models/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {}

  /**
   * getUsers from BACKEND
   */
  public getUsers(page: string): Observable<UserModel[]> {
    return this.http.get<UserModel[]>('https://reqres.in/api/users');
  }

  getUser(key$: string): Observable<UserModel> {
    const url = `https://reqres.in/api/users/${key$}`;
    return this.http.get(url).pipe(
      map(data => {
        console.log(data);
        return data as UserModel;
      })
    );
  }
}
