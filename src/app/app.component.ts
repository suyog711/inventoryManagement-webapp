import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MsgService } from './shared/services/msg.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    public router: Router,
    public msgService: MsgService
  ) {
    this.router.events.subscribe(
      (ev: NavigationEnd) => {
        // console.log("ev is >>", ev.url);
        if (ev.url) {
          var authRoute = ev.url.split('/')[1];
          if (authRoute != 'auth') {
            if (!localStorage.getItem('token')) {
              this.router.navigate(['/auth/login']);
            }
          }
        }
      }
    )
  }
  isLoggedin() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/auth/login']);
    this.msgService.showSucces('You are logged out!')
  }

}
