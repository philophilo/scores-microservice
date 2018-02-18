import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from "@angular/router";

import { MatButtonModule, MatCardModule, MatInputModule, MatDatepickerModule, 
  MatTooltipModule, MatToolbarModule, MatIconModule, MatNativeDateModule } from '@angular/material';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { ScoresListComponent } from './scores-list/scores-list.component';
import { ScorePanelComponent } from './score-panel/score-panel.component';
import { ScoresService } from "./scores-list/scores.service";
import { ScoreEditComponent } from './score-edit/score-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'scores', component: ScoresListComponent },
  { path: 'scores/:id', component: ScoreEditComponent },
  { path: '', redirectTo: '/scores', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ScoresListComponent,
    ScorePanelComponent,
    ScoreEditComponent,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [
    ScoresService,
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
