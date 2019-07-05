import { Component, OnInit } from "@angular/core";
import { User } from '../../shared/models/user.model';
import { MsgService } from 'src/app/shared/services/msg.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
    submitting: boolean = false;
    user;
    constructor(
        public msgService: MsgService,
        public authService: AuthService,
        public router: Router
    ) {

    }
    ngOnInit() {
        this.user = new User({});
    }

    submit() {
        this.submitting = true;
        this.authService.register(this.user).subscribe(
            (data) => {
                this.msgService.showSucces('Registration successful, Please Login!');
                this.submitting = false;
                this.router.navigate(['/auth/login'])
            },
            (error) => {
                this.msgService.showError(error);
                this.submitting = false;
            }
        )
    }
}