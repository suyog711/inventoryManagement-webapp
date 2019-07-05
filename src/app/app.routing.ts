import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { PageNoutFoundComponent } from './shared/page-nout-found/page-nout-found.component';

const appRouting: Routes = [
    {
        path: '',
        redirectTo: '/auth/login',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'      //lazy loading
    },
    {
        path: 'user',
        loadChildren: './users/users.module#UsersModule'

    },
    {
        path: 'product',
        loadChildren: './products/products.module#ProductsModule'

    },
    {
        path: '**',
        component: PageNoutFoundComponent
    }

];
@NgModule({
    imports: [
        RouterModule.forRoot(appRouting),
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}