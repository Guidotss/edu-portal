import { createCustomElement } from '@angular/elements';
import { Injector } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RemoteEntryComponent } from './app/remote-entry/entry.component';
import { appConfig } from './app/app.config';

bootstrapApplication(RemoteEntryComponent, appConfig)
  .then((ref) => {
    const injector = ref.injector as Injector;
    const el = createCustomElement(RemoteEntryComponent, { injector });
    customElements.define('app-courses-mfe-entry', el);
  })
  .catch((err) => console.error(err));