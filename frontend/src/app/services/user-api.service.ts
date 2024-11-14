import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../domain/User';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

    private API_URL:string = 'http://localhost:8080/api/users';

  constructor(private htpp:HttpClient) { }

  public getUsers():Observable<User[]> {
    return this.htpp.get<User[]>(this.API_URL);
  }

  public getUser(id:number):Observable<User> {
    return this.htpp.get<User>(`${this.API_URL}/${id}`);
  }

  public createUser(user:User):Observable<User> {
    return this.htpp.post<User>(this.API_URL, user);
  }
  
  public updateUser(user:User) {
    return this.htpp.put(this.API_URL, user);
  }

  public deleteUser(id:number) {
    return this.htpp.delete(`${this.API_URL}/${id}`);
  }
}
