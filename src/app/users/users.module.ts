import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DashboardComponent, ProfileComponent, ChangePasswordComponent],
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule { }
