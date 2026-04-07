import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserType } from '../Models/User';
import { Observable } from 'rxjs';
import { User } from '../user/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  
  api = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  getUser(): Observable<UserType[]> {
    return this.http.get<UserType[]>(this.api);
  }

  addUser(user: UserType) {
    return this.http.post(this.api, user);
  }

  DeleteUser(id: number) {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
  UpdateUser(id:number , user:UserType){
    return this.http.put(`${this.api}/${id}`,user);
  }
}
