import {Component, inject} from '@angular/core';
import {WorkbenchRouter, WorkbenchView} from '@scion/workbench-client';
import {Product} from '../product.model';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {

  private workbenchRouter = inject(WorkbenchRouter);
  protected products: Product[];

  constructor(view: WorkbenchView, productService: ProductService) {
    view.setTitle('Product Catalog');
    view.signalReady();
    this.products = productService.getProducts();
  }

  protected onOpenProduct(id: string): void {
    this.workbenchRouter.navigate({entity: 'product'}, {
      params: {id},
    });
  }
}
