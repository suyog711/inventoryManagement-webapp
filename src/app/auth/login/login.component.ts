import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { User } from '../../shared/models/user.model';
import { MsgService } from 'src/app/shared/services/msg.service';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    user;
    submitting: boolean = false;
    constructor(
        public router: Router,
        public msgService: MsgService,
        public authService: AuthService
    ) {
        this.user = new User({});
        if (localStorage.getItem('token')) {
            this.router.navigate(['/user'])
        }
    }

    login() {
        console.log(this.user)
        this.submitting = true;
        this.authService.login(this.user).subscribe(
            (data: any) => {
                this.msgService.showSucces(data.user.name + ', you are logged in!');
                this.submitting = false;
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', JSON.stringify(data.user))
                this.router.navigate(['/user']);
            },
            (error) => {
                this.submitting = false;
                this.msgService.showError(error);
            }
        )
    }
}