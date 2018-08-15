import {Component, Input, OnInit} from '@angular/core';
import { FlamelinkService } from '../../flamelink.service';

@Component({
  selector: 'app-web-project',
  templateUrl: './web-project.component.html',
  styleUrls: ['./web-project.component.scss']
})
export class WebProjectComponent implements OnInit {
  @Input() item;
  showImg = false;

  constructor(private fl: FlamelinkService) { }

  ngOnInit() {
    this.fl.getMediaUrl(this.item.logo).subscribe(
      (data) => {
        this.item.img = data;
      }, (err) => {
        console.error(err);
      }, () => this.showImg = true
    );
  }

}
