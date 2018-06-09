import {AfterViewInit, Component, OnDestroy, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(private router: Router) { }

  ngOnInit() {

  }
  ngAfterViewInit() {
  }
  ngOnDestroy() {
    window.onwheel = null;
  }

}
