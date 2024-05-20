import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private logoutSubject = new Subject<void>();
  logoutObservable$ = this.logoutSubject.asObservable();

  private loginSubject = new Subject<void>();
  loginObservable$ = this.loginSubject.asObservable();

  notifyLogout() {
    this.logoutSubject.next();
  }

  notifyLogin() {
    this.loginSubject.next();
  }
}
