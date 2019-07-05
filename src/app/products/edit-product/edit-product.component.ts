import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MsgService } from 'src/app/shared/services/msg.service';
import { ProductService } from '../services/product.service';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  productId;
  product;
  submitting: boolean = false;
  loading: boolean = false;
  constructor(
    public router: Router,
    public msgService: MsgService,
    public productService: ProductService,
    public activatedRoute: ActivatedRoute
  ) {
    this.product = new Product({})
  }

  ngOnInit() {
    this.loading = true;
    this.productId = this.activatedRoute.snapshot.params['id'];
    this.productService.getById(this.productId).subscribe(
      (data: Product) => {
        console.log('data>>', data);
        this.loading = false;
        this.product = data;
        this.product.colors = data.colors.join(',');
        this.product.tags = data.tags.join(',');
        if (!data.warranty) {
          console.log('data warranty>>', data.warranty);
          this.product.warranty = {
            status: false
          }
        }
        console.log('product data>>', this.product);
      },
      error => {
        this.loading = false;
        this.msgService.showError(error);
      }
    )
  }

  submit() {
    this.submitting = true;
    this.productService.update(this.product).subscribe(
      (data) => {
        this.msgService.showSucces('Product Updated Successfully');
        this.router.navigate(['/product/list'])
      },
      (error) => {
        this.submitting = false;
        this.msgService.showError(error);
      }
    )
  }

}
