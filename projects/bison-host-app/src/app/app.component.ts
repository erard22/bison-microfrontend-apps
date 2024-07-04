import {Component} from '@angular/core';
import {WorkbenchComponent} from '@scion/workbench';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WorkbenchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
