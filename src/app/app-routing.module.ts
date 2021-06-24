import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { MlbComponent } from './mlb/mlb.component';
import { MlbBoxScoreComponent } from './mlb/mlb-box-score/mlb-box-score.component';

const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    {
        path: 'mlb',
        children: [
            { path: '', component: MlbComponent, pathMatch: 'full' },
            { path: ':id', component: MlbBoxScoreComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
