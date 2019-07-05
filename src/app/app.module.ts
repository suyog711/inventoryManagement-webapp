import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ProductsModule } from './products/products.module';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        AuthModule,//subModule
        UsersModule,
        SharedModule,
        ToastrModule.forRoot(),
        ProductsModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
