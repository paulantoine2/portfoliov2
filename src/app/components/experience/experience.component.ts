import { Component, OnInit } from '@angular/core';
import { FlamelinkService } from '../../flamelink.service';

@Component({
  selector: 'experiences',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  steps = [];
  active = 1;

  constructor(private fl: FlamelinkService) { }

  ngOnInit() {
    this.fl.getAllContent('experience').subscribe(
      (data) => this.steps = Object.values(data)
    );
  }

  onStepActivation(index) {
    this.active = index;
  }

}
