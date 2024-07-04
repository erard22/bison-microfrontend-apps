import {Component, inject, Signal} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs';
import {takeUntilDestroyed, toSignal} from '@angular/core/rxjs-interop';
import {OrderService} from '../order.service';
import {Item, Order} from '../order.model';
import {OrderItemComponent} from './order-item/order-item.component';
import {CustomerInfoComponent} from './customer-info/customer-info.component';
import {WorkbenchRouter, WorkbenchView} from '@scion/workbench-client';

@Component({
  selector: 'app-order-detail',
  standalone: true,
  imports: [
    OrderItemComponent,
    CustomerInfoComponent,
  ],
  templateUrl: './order-detail.component.html',
  styleUrl: './order-detail.component.scss',
})
export class OrderDetailComponent {

  private orderService = inject(OrderService);
  private workbenchRouter = inject(WorkbenchRouter);

  protected order: Signal<Order>;

  constructor(route: ActivatedRoute, view: WorkbenchView) {
    this.order = toSignal(route.paramMap
      .pipe(
        map(params => params.get('id')!),
        map(id => this.orderService.getOrder(id)!),
        takeUntilDestroyed(),
      ), {requireSync: true});

    view.setTitle(`Order from ${this.order().customer.name}`);
    view.signalReady();
  }

  protected onOrderItemClick(item: Item): void {
    this.workbenchRouter.navigate({entity: 'product'}, {
      params: {id: item.productId},
      partId: 'right',
    });
  }
}
