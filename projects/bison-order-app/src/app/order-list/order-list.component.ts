import {Component, inject} from '@angular/core';
import {Order} from '../order.model';
import {OrderService} from '../order.service';
import {OrderListItemComponent} from './order-list-item/order-list-item.component';
import {RouterLink} from '@angular/router';
import {WorkbenchRouter, WorkbenchView} from '@scion/workbench-client';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [
    OrderListItemComponent,
    RouterLink,
  ],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.scss',
})
export class OrderListComponent {

  protected orders: Order[];
  private workbenchRouter = inject(WorkbenchRouter);

  constructor(view: WorkbenchView, orderService: OrderService) {
    view.setTitle('Open Orders');
    this.orders = orderService.getOrders();
    view.signalReady();
  }

  protected onOpenOrder(id: string): void {
    this.workbenchRouter.navigate({entity: 'order'}, {params: {id}});
  }
}
