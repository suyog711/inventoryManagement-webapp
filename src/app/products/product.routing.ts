import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ListProductComponent } from './list-product/list-product.component';

const productRouting: Routes = [
    {
        path: 'add',
        component: AddProductComponent
    },
    {
        path: 'edit/:id',
        component: EditProductComponent
    },
    {
        path: 'list',
        component: ListProductComponent
    },
    {
        path: 'search',
        component: SearchProductComponent
    }
]
@NgModule({
    imports: [
        RouterModule.forChild(productRouting)
    ],
    exports: [
        RouterModule
    ]
})
export class ProductRoutingModule { }