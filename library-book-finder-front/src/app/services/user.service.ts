import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.development';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseApiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.baseApiUrl+'user')
  }

  addUser(addUserRequest: User):  Observable<User>{
    return this.http.post<User>(this.baseApiUrl + 'User', addUserRequest);
  }
}
