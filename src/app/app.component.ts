import {Component, Inject, OnInit} from "@angular/core";
import { AosToken } from './aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
      '(window:scroll)': 'onScroll($event)'
  }
})
export class AppComponent{
  title = 'app';
  isScrolled = false;
  currPos: Number = 0;
  startPos: Number = 0;
  changePos: Number = 10;
  activeExperience = 1;
  scroll: number;

  constructor(@Inject(AosToken) aos) {
    aos.init({
      offset: 200
    });  //you can now use it, although you may want to do this onInit instead
  }

  activateExperience(i) {
    this.activeExperience = i;
  }

  onScroll(evt) {// window object can be wrapper in a service but for now we directly use it
    this.scroll = window.pageYOffset;
    this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
    if(this.currPos >= this.changePos ) {
        this.isScrolled = true;
    } else {
        this.isScrolled = false;
    }
  }
}
