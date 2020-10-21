import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get<User[]>(`${environment.urlApi}/users`)
  }

  public register(user: User) {
    return this.http.post<User>(`${environment.urlApi}/users/register`, user);
  }

  public delete(id: number) {
    return this.http.delete<User>(`${environment.urlApi}/users/${id}`);
  }
}
