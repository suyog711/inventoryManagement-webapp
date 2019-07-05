import { Injectable } from "@angular/core";
import { User } from 'src/app/shared/models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {
    url = environment.BaseUrl;
    constructor(
        public http: HttpClient,
    ) {

    }

    login(data: User) {
        return this.http.post(this.url + 'auth/login', data, this.option())
    }

    register(data: User) {
        return this.http.post(this.url + 'auth/register', data, this.option())
    }

    forgotPassword(data: User) {

    }

    resetPassword(token: string, data: User) {

    }
    option() {
        return {
            headers: new HttpHeaders({
                'Content_Type': 'application/json'
            })
        }
    }
}