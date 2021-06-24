import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Score, ScoreItem } from '../shared/score-card/score-card.component';

export interface MlbScore extends Score {
    id: string;
    name: string;
    date: Date;
    statusType: 'STATUS_SCHEDULED' | 'STATUS_IN_PROGRESS' | 'STATUS_FINAL';
    status: string;
    shortName: string;
    completed: boolean;
    winning: number;
    homeScore: MlbScoreItem;
    awayScore: MlbScoreItem;
}

export interface MlbScoreItem extends ScoreItem {
    homeAway: 'home' | 'away';
    score: string;
    winner: boolean;
    teamAbbreviation: string;
    team: string;
}

@Injectable({
    providedIn: 'root'
})
export class MlbService {
    constructor(private readonly http: HttpClient) {}

    getMlbScores(): Observable<MlbScore[]> {
        return this.http.get<MlbScore[]>('http://localhost:3000/scores/mlb');
    }
}
