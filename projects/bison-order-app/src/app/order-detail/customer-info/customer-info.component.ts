import {Component, input} from '@angular/core';
import {Address, Customer} from '../../order.model';

@Component({
  selector: 'app-customer-info',
  standalone: true,
  imports: [],
  templateUrl: './customer-info.component.html',
  styleUrl: './customer-info.component.scss'
})
export class CustomerInfoComponent {

  public customer = input.required<Customer>();
  public address = input.required<Address>();
}
