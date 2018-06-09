import {Component, OnDestroy, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {

  constructor(private router: Router) { }

  ngOnInit() {
    window.onwheel = () => {
      var d = document.documentElement;
      var offset = d.scrollTop + window.innerHeight;
      var height = d.offsetHeight;
      if (offset >= height) {
        this.router.navigate(['/portfolio']);
      }
    };
  }
  ngOnDestroy() {
    window.onwheel = null;
  }

}
