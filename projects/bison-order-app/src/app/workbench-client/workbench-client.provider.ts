import {APP_INITIALIZER, EnvironmentProviders, inject, makeEnvironmentProviders, NgZone} from '@angular/core';
import {APP_IDENTITY, ContextService, FocusMonitor, IntentClient, ManifestService, MessageClient, ObservableDecorator, OutletRouter, PlatformPropertyService, PreferredSizeService} from '@scion/microfrontend-platform';
import {WorkbenchClient, WorkbenchDialog, WorkbenchDialogService, WorkbenchMessageBox, WorkbenchMessageBoxService, WorkbenchNotificationService, WorkbenchPopup, WorkbenchPopupService, WorkbenchRouter, WorkbenchThemeMonitor, WorkbenchView} from '@scion/workbench-client';
import {NgZoneObservableDecorator} from './ng-zone-observable-decorator';
import {Beans} from '@scion/toolkit/bean-manager';

/**
 * Registers a set of DI providers to set up SCION Workbench Client.
 */
export function provideWorkbenchClient(): EnvironmentProviders | [] {
  if (window === window.parent) {
    return [];
  }

  return makeEnvironmentProviders([
    {
      provide: APP_INITIALIZER,
      useFactory: connectToWorkbenchFn,
      multi: true,
    },
    {provide: APP_IDENTITY, useFactory: () => Beans.get(APP_IDENTITY)},
    {provide: MessageClient, useFactory: () => Beans.get(MessageClient)},
    {provide: IntentClient, useFactory: () => Beans.get(IntentClient)},
    {provide: OutletRouter, useFactory: () => Beans.get(OutletRouter)},
    {provide: ContextService, useFactory: () => Beans.get(ContextService)},
    {provide: ManifestService, useFactory: () => Beans.get(ManifestService)},
    {provide: FocusMonitor, useFactory: () => Beans.get(FocusMonitor)},
    {provide: PlatformPropertyService, useFactory: () => Beans.get(PlatformPropertyService)},
    {provide: PreferredSizeService, useFactory: () => Beans.get(PreferredSizeService)},
    {provide: WorkbenchRouter, useFactory: () => Beans.get(WorkbenchRouter)},
    {provide: WorkbenchView, useFactory: () => Beans.opt(WorkbenchView)},
    {provide: WorkbenchPopupService, useFactory: () => Beans.get(WorkbenchPopupService)},
    {provide: WorkbenchPopup, useFactory: () => Beans.opt(WorkbenchPopup)},
    {provide: WorkbenchDialogService, useFactory: () => Beans.get(WorkbenchDialogService)},
    {provide: WorkbenchDialog, useFactory: () => Beans.opt(WorkbenchDialog)},
    {provide: WorkbenchMessageBoxService, useFactory: () => Beans.get(WorkbenchMessageBoxService)},
    {provide: WorkbenchMessageBox, useFactory: () => Beans.opt(WorkbenchMessageBox)},
    {provide: WorkbenchNotificationService, useFactory: () => Beans.get(WorkbenchNotificationService)},
    {provide: WorkbenchThemeMonitor, useFactory: () => Beans.get(WorkbenchThemeMonitor)},
  ]);
}

/**
 * Connects this app to the workbench in the host app.
 */
function connectToWorkbenchFn(): () => Promise<void> {
  const zone = inject(NgZone);

  return async (): Promise<void> => {
    Beans.register(ObservableDecorator, {useValue: new NgZoneObservableDecorator(zone)});
    await zone.runOutsideAngular(() => WorkbenchClient.connect('bison-order-app'));
  };
}
