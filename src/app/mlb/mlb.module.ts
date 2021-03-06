import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MlbComponent } from './mlb.component';
import { MlbScoreCardComponent } from './mlb-score-card/mlb-score-card.component';
import { MlbBoxScoreComponent } from './mlb-box-score/mlb-box-score.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [MlbComponent, MlbScoreCardComponent, MlbBoxScoreComponent],
    imports: [CommonModule, RouterModule, SharedModule]
})
export class MlbModule {}
