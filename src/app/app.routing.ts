import { Routes } from '@angular/router';
import {AboutComponent} from './pages/about/about.component';
import {PortfolioComponent} from './pages/portfolio/portfolio.component';
import {ExperienceComponent} from './pages/experience/experience.component';
import {SkillsComponent} from './pages/skills/skills.component';
import {ContactComponent} from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '',            component: AboutComponent},
  { path: 'portfolio',           component: PortfolioComponent},
  { path: 'experience',             component: ExperienceComponent},
  { path: 'skills',             component: SkillsComponent},
  { path: 'contact',             component: ContactComponent},
];
