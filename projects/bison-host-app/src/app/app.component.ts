import {Component, inject} from '@angular/core';
import {WorkbenchComponent, WorkbenchService} from '@scion/workbench';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WorkbenchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  private workbenchService = inject(WorkbenchService);

  public onPerspectiveReset(): void {
    this.workbenchService.resetPerspective();
  }
}
