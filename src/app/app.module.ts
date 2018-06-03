import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { InlineSVGModule } from 'ng-inline-svg';
import { AosToken, aos } from './aos';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InlineSVGModule
  ],
  providers: [
    { provide: AosToken, useValue: aos }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
