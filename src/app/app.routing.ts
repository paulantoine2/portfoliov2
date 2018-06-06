import { Routes } from '@angular/router';
import {AboutComponent} from './pages/about/about.component';
import {PortfolioComponent} from './pages/portfolio/portfolio.component';
import {ExperienceComponent} from './pages/experience/experience.component';
import {SkillsComponent} from './pages/skills/skills.component';
import {ContactComponent} from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '',            component: AboutComponent, data: {state: 'about'}},
  { path: 'portfolio',           component: PortfolioComponent, data: {state: 'portfolio'}},
  { path: 'experience',             component: ExperienceComponent, data: {state: 'experience'}},
  { path: 'skills',             component: SkillsComponent, data: {state: 'skills'}},
  { path: 'contact',             component: ContactComponent, data: {state: 'contact'}},
];
