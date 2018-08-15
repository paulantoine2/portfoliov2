import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'experience-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  @Input() data: string;
  @Input() active: number;

  constructor() { }

  ngOnInit() {
  }

}
