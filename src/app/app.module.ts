import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { InlineSVGModule } from 'ng-inline-svg';
import { AosToken, aos } from './aos';

import { AppComponent } from './app.component';
import { WebProjectComponent } from './components/web-project/web-project.component';
import { FlamelinkService } from './flamelink.service';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';
import { ExperienceComponent } from './components/experience/experience.component';
import { StepComponent } from './components/experience/step/step.component';
import { DescriptionComponent } from './components/experience/description/description.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogComponent } from './pages/blog/blog.component';
import { HeaderComponent } from './components/header/header.component';
import { ArticleTeaserComponent } from './components/article-teaser/article-teaser.component';

@NgModule({
  declarations: [
    AppComponent,
    WebProjectComponent,
    HomeComponent,
    ExperienceComponent,
    StepComponent,
    DescriptionComponent,
    BlogComponent,
    HeaderComponent,
    ArticleTeaserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InlineSVGModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: AosToken, useValue: aos },
    FlamelinkService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
