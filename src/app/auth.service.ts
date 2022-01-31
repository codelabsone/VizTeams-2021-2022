import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { DatabaseService } from './database.service';
import { User } from './shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isSignedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);
  currentUser: BehaviorSubject<User | null> = new BehaviorSubject(null);
  token: BehaviorSubject<string | null> = new BehaviorSubject(null);

  constructor(private db: DatabaseService) {
    var userData = JSON.parse(localStorage.getItem('userData'));
    if (userData != null && userData != undefined) {
      this.currentUser.next(userData.user);
      this.token.next(userData.token)
    }
  }

  onSignUp(email, password) {
    return this.db.signUp(email, password).pipe(map(res => {
      if (res.error) {
        throw new Error(res.error)
      }
      else {
        console.log(res);
        localStorage.setItem('userData', JSON.stringify(res));
        this.currentUser.next(res.user);
        return res
      }
    }));
  }

  onSignIn(email, password) {
    return this.db.signIn(email, password).pipe(map(res => {
      if (res.error) {
        throw new Error(res.error)
      }
      else {
        console.log(res);
        localStorage.setItem('userData', JSON.stringify(res));
        this.currentUser.next(res.user);
        return res
      }
    }));
  }



  onLogOut(){
    localStorage.clear();
    this.currentUser.next(null);
  }


}
