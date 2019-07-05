import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { MsgService } from 'src/app/shared/services/msg.service';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products: Array<Product>;
  loading: boolean = false;
  @Input() results: Array<Product>;
  @Output() showAgain = new EventEmitter<any>();

  constructor(
    public productService: ProductService,
    public router: Router,
    public msgService: MsgService
  ) { }


  ngOnInit() {
    // console.log('from search', this.results);
    if (!this.results) {
      this.loading = true;
      this.productService.list().subscribe(
        (data: Array<Product>) => {
          this.products = data;
          // console.log('products>>', this.products);
          this.loading = false;
        },
        (error) => {
          this.msgService.showError(error);
          this.loading = false;
        }
      )
    } else {
      this.products = this.results;
    }
  }

  remove(id, index) {
    let confirmation = confirm('Are you sure you want to remove?');
    if (confirmation) {
      this.productService.remove(id).subscribe(
        data => {
          this.msgService.showSucces('Product deleted successfully');
          this.products.splice(index, 1);
        },
        error => {
          this.msgService.showError(error);
        }
      )
    }
  }

  showSearchMenu() {
    this.showAgain.emit();
  }
}
