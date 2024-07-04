import {Component, computed, input, Signal} from '@angular/core';
import {Order} from '../../order.model';
import {ProductService} from '../../product.service';

@Component({
  selector: 'app-order-list-item',
  standalone: true,
  imports: [],
  templateUrl: './order-list-item.component.html',
  styleUrl: './order-list-item.component.scss',
})
export class OrderListItemComponent {

  public order = input.required<Order>();

  protected productNames: Signal<string>;

  constructor(productService: ProductService) {
    this.productNames = computed(() => this.order().items
      .map(item => productService.getProduct(item.productId))
      .map(product => product!.name)
      .join(','))
  }
}
