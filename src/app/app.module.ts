import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxSpinnerModule } from "ngx-spinner";  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './test/test.component';
import {WebcamModule} from 'ngx-webcam';
import * as $ from "jquery";


@NgModule({
    declarations: [AppComponent, TestComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgxSpinnerModule, BrowserAnimationsModule,WebcamModule],
    providers: [NgxSpinnerModule],
    bootstrap: [AppComponent],
})
export class AppModule {}
