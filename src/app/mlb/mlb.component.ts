import { Component, OnInit } from '@angular/core';
import { MlbScore, MlbService } from './mlb.service';

@Component({
    selector: 'app-mlb',
    templateUrl: './mlb.component.html',
    styleUrls: ['./mlb.component.scss']
})
export class MlbComponent implements OnInit {
    scores: MlbScore[] = [];
    constructor(private readonly mlbService: MlbService) {}

    ngOnInit(): void {
        this.mlbService.getMlbScores().subscribe((response) => {
            this.scores = response;
        });
    }
}
