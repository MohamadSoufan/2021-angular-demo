import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Score } from './score-card.model';

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
