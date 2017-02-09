import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module'
//yimport { enableProdMode } from '@angular/core';

// // Enable production mode unless running locally
// if (!/localhost/.test(document.location.host)) {
//   enableProdMode();
// }
// platformBrowserDynamic().bootstrapModule(AppModule);

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);

