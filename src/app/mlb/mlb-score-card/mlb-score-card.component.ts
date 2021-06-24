import { Component, Input, OnInit } from '@angular/core';
import { MlbScore } from '../mlb.service';

@Component({
  selector: 'app-mlb-score-card',
  templateUrl: './mlb-score-card.component.html',
  styleUrls: ['./mlb-score-card.component.scss']
})
export class MlbScoreCardComponent implements OnInit {
  @Input() scoreItem!: MlbScore;

  constructor() { }

  ngOnInit(): void {
  }

  handleBoxClicked(id: string) {
    console.log('id from handleBoxClicked', id);

  }

}
