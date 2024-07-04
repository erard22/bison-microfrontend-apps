import products from './products.json';
import {Injectable} from '@angular/core';
import {Product} from './product.model';

@Injectable({providedIn: 'root'})
export class ProductService {

  public getProduct(id: string): Product | undefined {
    return products.find(product => product.id === id);
  }

  public getProducts(): Product[] {
    return products;
  }
}
