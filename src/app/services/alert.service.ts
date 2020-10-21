import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private subject: Subject<any> = new Subject();
  private keepAfterRouteChange: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationStart) {
        if(this.keepAfterRouteChange) {
          this.keepAfterRouteChange = false;
        }
        else {
          this.clear();
        }
      }
    })
  }

  public getAlert(): Observable<any> {
    return this.subject.asObservable();
  }

  public success(msg: string, keepAfterRouteChange: boolean = false) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next({type: 'success', text: msg});
  }

  public error(msg: string, keepAfterRouteChange: boolean = false) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next({type: 'error', text: msg});
  }

  public clear() {
    this.subject.next();
  }
}
