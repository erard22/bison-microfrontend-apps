import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideWorkbench} from '@scion/workbench';

export const appConfig: ApplicationConfig = {
  providers: [
    provideWorkbench({
      microfrontendPlatform: {
        applications: [
          {symbolicName: 'bison-order-app', manifestUrl: 'http://localhost:5001/manifest.json'},
        ],
      },
    }),
    provideRouter(routes),
    provideAnimations(),
  ],
};
