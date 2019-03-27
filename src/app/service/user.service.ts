import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:3000/login';
  public getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }
  public getById(id: number) {
    return this.http.get<User>(this.baseUrl + '/' + id);
  }
  public register(user: User) {
    return this.http.post<User>(this.baseUrl + '/', user);
  }
  public update(user: User) {
    return this.http.put<User>(this.baseUrl + '/' + user.id , user);
  }
  public delete(id: number) {
    return this.http.delete<User>(this.baseUrl + '/' + id );
  }
}
