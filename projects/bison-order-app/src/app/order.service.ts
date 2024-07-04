import orders from './orders.json';
import {Injectable} from '@angular/core';
import {Order} from './order.model';

@Injectable({providedIn: 'root'})
export class OrderService {

  public getOrder(id: string): Order | undefined {
    return orders.find(order => order.id === id);
  }

  public getOrders(): Order[] {
    return orders;
  }
}
