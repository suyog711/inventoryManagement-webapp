import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from 'src/app/shared/models/product.model';

@Injectable()
export class ProductService {
    url = environment.BaseUrl + 'products/'
    constructor(
        public http: HttpClient
    ) {

    }
    add(product: Product) {
        return this.http.post(this.url, product, this.option())
    }
    list() {
        return this.http.get(this.url, this.option())
    }

    getById(id: string) {
        return this.http.get(`${this.url}${id}`, this.option())
    }

    update(product: Product) {
        return this.http.put(`${this.url}${product._id}`, product, this.option())
    }

    remove(id: string) {
        return this.http.delete(`${this.url}${id}`, this.option())
    }

    search(product: Product) {
        return this.http.post(`${this.url}search`, product, this.option())
    }


    option() {
        return {
            headers: new HttpHeaders({
                'Content_Type': 'application/json',
                'token': localStorage.getItem('token')
            })
        }
    }
}