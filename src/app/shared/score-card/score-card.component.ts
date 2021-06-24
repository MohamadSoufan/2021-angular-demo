import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface Score {
    id: string;
    name: string;
    date: Date;
    statusType: 'STATUS_SCHEDULED' | 'STATUS_IN_PROGRESS' | 'STATUS_FINAL';
    status: string;
    shortName: string;
    completed: boolean;
    winning: number;
    homeScore: ScoreItem;
    awayScore: ScoreItem;
}

export interface ScoreItem {
    homeAway: 'home' | 'away';
    score: string;
    winner: boolean;
    teamAbbreviation: string;
    team: string;
}

@Component({
    selector: 'app-score-card',
    templateUrl: './score-card.component.html',
    styleUrls: ['./score-card.component.scss']
})
export class ScoreCardComponent implements OnInit {
    @Input() scoreItem!: Score;
    @Output() boxClicked: EventEmitter<string> = new EventEmitter();

    constructor() {}

    ngOnInit(): void {}

    handleBoxClicked(id: string) {
        this.boxClicked.emit(id);
    }
}
