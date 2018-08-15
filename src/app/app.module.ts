import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { InlineSVGModule } from 'ng-inline-svg';
import { AosToken, aos } from './aos';

import { AppComponent } from './app.component';
import { WebProjectComponent } from './components/web-project/web-project.component';
import { FlamelinkService } from './flamelink.service';

@NgModule({
  declarations: [
    AppComponent,
    WebProjectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InlineSVGModule
  ],
  providers: [
    { provide: AosToken, useValue: aos },
    FlamelinkService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
