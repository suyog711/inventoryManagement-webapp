import { Component, OnInit } from '@angular/core';
import { MsgService } from 'src/app/shared/services/msg.service';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  submitting: boolean = false;
  product;
  constructor(
    public msgService: MsgService,
    public productService: ProductService,
    public router: Router
  ) {
    this.product = new Product({});
  }

  ngOnInit() {
  }

  submit() {
    this.submitting = true;
    this.productService.add(this.product).subscribe(
      (data) => {
        this.submitting = false;
        this.router.navigate(['/product/list']);
        this.msgService.showSucces('Product added successfully');
      },
      error => {
        this.submitting = false;
        this.msgService.showError(error);
      }
    )
  }

}
