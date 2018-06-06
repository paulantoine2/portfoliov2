import {Component, Inject, OnInit} from '@angular/core';
import { AosToken } from './aos';
import {routerTransition} from './router.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ routerTransition ],
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

  constructor(@Inject(AosToken) aos) {
    aos.init({
      offset: 200
    });  //you can now use it, although you may want to do this onInit instead
  }

  onScroll(evt) {// window object can be wrapper in a service but for now we directly use it
    this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
    if(this.currPos >= this.changePos ) {
        this.isScrolled = true;
    } else {
        this.isScrolled = false;
    }
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
