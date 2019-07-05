import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsgService } from 'src/app/shared/services/msg.service';
import { ProductService } from '../services/product.service';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {
  submitting: boolean = false;
  loading: boolean = false;
  searchResult: boolean = false;
  products;
  product;
  categories = [];
  allProducts = [];
  groupByName = [];
  groupByBrand = [];
  showMultipleDate: boolean = false;

  showName: boolean = false;
  constructor(
    public router: Router,
    public msgService: MsgService,
    public productService: ProductService
  ) {
    this.product = new Product({});
    this.product.category = '';
  }

  ngOnInit() {
    this.productService.list().subscribe(
      (data: any) => {
        this.allProducts = data;
        data.forEach((item) => {
          if (this.categories.indexOf(item.category) == -1) {
            this.categories.push(item.category);
          }
        })
      }
    )
  }

  search() {
    this.submitting = true;
    if (!this.product.toDate) {
      this.product.toDate = this.product.fromDate;
    }
    console.log("search", this.product)
    this.productService.search(this.product).subscribe(
      (data: Array<Product>) => {
        this.submitting = false;
        console.log(data);
        if (!data.length) {
          this.msgService.showInfo('No product matched your search query');
        } else {
          this.products = data;
          this.searchResult = true;
        }
      },
      error => {
        this.submitting = false;
        this.msgService.showError(error);
      }
    )
  }

  catChange(category) {
    this.groupByName = this.allProducts.filter((item) => {
      if (item.category == category) {
        return item;
      }
    })
    this.allProducts.forEach((item) => {
      if (item.category == category) {
        if (this.groupByBrand.indexOf(item.brand) == -1) {
          this.groupByBrand.push(item.brand)
        }
      }
    })
    this.showName = true;
  }

  showSearchForm() {
    this.searchResult = false;
    this.product = new Product({});
    this.groupByName = [];
    this.groupByBrand = [];
    this.showName = false;
    this.showMultipleDate = false;
  }

  changeMultipleDate() {
    this.showMultipleDate = !this.showMultipleDate;
    if (!this.showMultipleDate) {
      this.product.toDate = '';
    }
  }
}


