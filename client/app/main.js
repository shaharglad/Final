"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app.module');
//yimport { enableProdMode } from '@angular/core';
// // Enable production mode unless running locally
// if (!/localhost/.test(document.location.host)) {
//   enableProdMode();
// }
// platformBrowserDynamic().bootstrapModule(AppModule);
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map