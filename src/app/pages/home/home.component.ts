import { Component, Inject, OnInit } from '@angular/core';
import { AosToken } from '../../aos';
import { FlamelinkService } from '../../flamelink.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '(window:scroll)': 'onScroll($event)'
  },
  animations: [
    trigger('fade', [
      transition(':leave', [
        animate(200, style({opacity: '0'}))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  title = 'app';
  isScrolled = false;
  currPos: Number = 0;
  startPos: Number = 0;
  changePos: Number = 10;
  scroll: number;
  web_projects = [];
  about_text = '';
  everyday_tools: string;
  isLoading = true;
  completed = 0;

  constructor(@Inject(AosToken) aos, private fl: FlamelinkService) {
    aos.init({
      offset: 200
    });
  }

  ngOnInit() {
    this.fl.getAllContent('web_project').subscribe(
      (data) => this.web_projects = Object.values(data),
      (error) => console.error(error),
      () => this.onComplete()
    );
    this.fl.getAllContent('about').subscribe(
      (data) => this.about_text = data.description,
      (error) => console.error(error),
      () => this.onComplete()
    );
    this.fl.getAllContent('everydayTools').subscribe(
      (data) => this.everyday_tools = data.description,
      (error) => console.error(error),
      () => this.onComplete()
    );
  }

  onScroll(evt) {
    this.scroll = window.pageYOffset;
    this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
    this.isScrolled = this.currPos >= this.changePos;
  }

  onComplete() {
    this.completed++;
    if (this.completed >= 3) { this.isLoading = false; }
  }

}
