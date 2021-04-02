import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-summary-card',
  templateUrl: './main-summary-card.component.html',
  styleUrls: ['./main-summary-card.component.scss']
})
export class MainSummaryCardComponent implements OnInit {

  @Input()
  totalCount!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
