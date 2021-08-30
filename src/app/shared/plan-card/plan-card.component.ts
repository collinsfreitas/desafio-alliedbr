import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan-card',
  templateUrl: './plan-card.component.html',
  styleUrls: ['./plan-card.component.scss']
})
export class PlanCardComponent implements OnInit {

  @Input() attributes: any;

  constructor() { }

  ngOnInit(): void {
  }

}
