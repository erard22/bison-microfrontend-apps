import { Routes } from '@angular/router';
import {ProductListComponent} from './product/product-list/product-list.component';
import {ProductDetailComponent} from './product/product-detail/product-detail.component';

export const routes: Routes = [
  {path: 'products', loadComponent: () => ProductListComponent},
  {path: 'products/:id', loadComponent: () => ProductDetailComponent},
];
