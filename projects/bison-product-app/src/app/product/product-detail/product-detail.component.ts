import {Component, inject, Signal} from '@angular/core';
import {takeUntilDestroyed, toSignal} from '@angular/core/rxjs-interop';
import {map, Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../product.model';
import {ProductService} from '../product.service';
import {CanClose, WorkbenchMessageBoxService, WorkbenchView} from '@scion/workbench-client';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent implements CanClose {

  private productService = inject(ProductService);
  private messageBoxService = inject(WorkbenchMessageBoxService)

  protected product: Signal<Product>;

  constructor(route: ActivatedRoute, view: WorkbenchView) {
    this.product = toSignal(route.paramMap
      .pipe(
        map(params => params.get('id')!),
        map(id => this.productService.getProduct(id)!),
        takeUntilDestroyed(),
      ), {requireSync: true});

    view.setTitle(this.product().name);
    view.signalReady();
    view.addCanClose(this)
  }

  async canClose(): Promise<boolean> {
    const action = await this.messageBoxService.open('bar', {
      title: 'foo',
      actions: { yes: 'yes', no: 'no'}
    })
    return action === 'yes';
  }
}
