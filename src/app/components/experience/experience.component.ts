import { Component, OnInit } from '@angular/core';
import { FlamelinkService } from '../../flamelink.service';
import {Experience} from './experience.model';

@Component({
  selector: 'experiences',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  steps = [];
  active = 0;

  constructor(private fl: FlamelinkService) { }

  ngOnInit() {
    this.fl.getAllContent('experience').subscribe(
      (data) => {
        this.steps = Object.values(data).sort((a: Experience, b: Experience) => (a.datePeriod < b.datePeriod) ? 1 : -1);
      }
    );
  }

  onStepActivation(index) {
    this.active = index;
  }

}
