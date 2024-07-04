import {Component, computed, input, Signal} from '@angular/core';
import {Item} from '../../order.model';
import {ProductService} from '../../product.service';
import {Product} from '../../product.model';

@Component({
  selector: 'app-order-item',
  standalone: true,
  imports: [],
  templateUrl: './order-item.component.html',
  styleUrl: './order-item.component.scss',
})
export class OrderItemComponent {

  public item = input.required<Item>();

  protected product: Signal<Product>;

  constructor(productService: ProductService) {
    this.product = computed(() => productService.getProduct(this.item().productId)!);
  }
}
