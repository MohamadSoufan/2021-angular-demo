import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './page-header/page-header.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ScoreCardComponent } from './score-card/score-card.component';

@NgModule({
    declarations: [PageHeaderComponent, HomeComponent, ScoreCardComponent],
    exports: [PageHeaderComponent, ScoreCardComponent],
    imports: [CommonModule, RouterModule]
})
export class SharedModule {}
