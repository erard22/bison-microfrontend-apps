import { Routes } from '@angular/router';
import {OrderListComponent} from './order-list/order-list.component';
import {OrderDetailComponent} from './order-detail/order-detail.component';

export const routes: Routes = [
  {path: 'orders', loadComponent: () => OrderListComponent},
  {path: 'orders/:id', loadComponent: () => OrderDetailComponent},
];
