import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'experience-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent {
  @Input() data: any;
  @Input() index: number;
  @Input() active: number;
  @Output() activate = new EventEmitter<number>();

  constructor() { }

  activateExperience() {
    this.activate.emit(this.index);
  }

}
