import {Component, Inject, OnInit} from '@angular/core';
import { AosToken } from './aos';
import { FlamelinkService } from './flamelink.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
      '(window:scroll)': 'onScroll($event)'
  }
})
export class AppComponent implements OnInit {
  title = 'app';
  isScrolled = false;
  currPos: Number = 0;
  startPos: Number = 0;
  changePos: Number = 10;
  activeExperience = 1;
  scroll: number;
  web_projects = [];

  constructor(@Inject(AosToken) aos, private fl: FlamelinkService) {
    aos.init({
      offset: 200
    });
  }

  ngOnInit() {
    this.fl.getAllContent('web_project').subscribe(
      (data) => {
        this.web_projects = data;
      },
      (error) => {
        console.error(error);
      },
      () => {}
    );
  }

  activateExperience(i) {
    this.activeExperience = i;
  }

  onScroll(evt) {
    this.scroll = window.pageYOffset;
    this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
    if (this.currPos >= this.changePos ) {
        this.isScrolled = true;
    } else {
        this.isScrolled = false;
    }
  }
}
