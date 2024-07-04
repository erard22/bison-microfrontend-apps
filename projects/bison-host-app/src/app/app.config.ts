import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideWorkbench} from '@scion/workbench';

export const appConfig: ApplicationConfig = {
  providers: [
    provideWorkbench(),
    provideRouter(routes),
    provideAnimations(),
  ],
};
