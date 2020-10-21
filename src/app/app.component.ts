import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './model/user';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public currentUser: User;

  constructor(private router: Router, private authenticateService: AuthenticationService) {
    this.authenticateService.currentUser.subscribe((user) => {
      this.currentUser= user;
    })
  }

  logout() {
    this.authenticateService.logout();
    this.router.navigate(['/login']);
  }
}
