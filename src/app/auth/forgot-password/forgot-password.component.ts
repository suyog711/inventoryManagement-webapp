import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  submitting: boolean = false;
  user: User;
  constructor() { 
    this.user = new User({});
  }

  ngOnInit() {
  }

  submit() {
    this.submitting = true;
    setTimeout(() => {
      this.submitting = false;
    })
  }

}
