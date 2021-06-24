import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MlbScore } from '../mlb.service';

@Component({
    selector: 'app-mlb-score-card',
    templateUrl: './mlb-score-card.component.html',
    styleUrls: ['./mlb-score-card.component.scss']
})
export class MlbScoreCardComponent implements OnInit {
    @Input() scoreItem!: MlbScore;

    constructor(private readonly router: Router) {}

    ngOnInit(): void {}

    handleBoxClicked(id: string) {
        console.log('id from handleBoxClicked', id);
        this.router.navigateByUrl('/mlb/' + id);
    }
}
