// import { bootstrapApplication } from '@angular/platform-browser';

// import { AppComponent } from './app/app.component';

// import { LOCALE_ID } from '@angular/core';
// import { registerLocaleData } from '@angular/common';
// import localeNlBe from '@angular/common/locales/nl-BE';
// // or fr-BE / de-BE depending on your app

// registerLocaleData(localeNlBe);

// bootstrapApplication(AppComponent, {
//   providers: [{ provide: LOCALE_ID, useValue: 'nl-BE' }],
// }).catch((err) => console.error(err));

import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { LOCALE_ID } from '@angular/core';

platformBrowser()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
