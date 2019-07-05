import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ProfileComponent } from './profile/profile.component';

const usersRouting: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'change-password',
        component: ChangePasswordComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },

]
@NgModule({
    imports: [
        RouterModule.forChild(usersRouting)
    ],
    exports: [
        RouterModule
    ]
})
export class UsersRoutingModule {

}