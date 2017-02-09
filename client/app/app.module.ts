///<reference path="app.component.ts"/>
/**
 * Created by Shahar on 09/02/2017.
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
//import {AdsComponent} from './components/ads/ads.component';

@NgModule({
    declarations: [
        AppComponent/*, AdsComponent*/
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

