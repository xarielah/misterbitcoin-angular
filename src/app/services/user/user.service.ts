import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}
  user = {
    _id: crypto.randomUUID(),
    name: 'Ariel',
    coins: 100,
    moves: [],
  };

  _loggedInUser$ = new BehaviorSubject<User>(this.user);
  loggedInUser$ = this._loggedInUser$.asObservable();

  public getUser(): User {
    return this._loggedInUser$.value;
  }
}
