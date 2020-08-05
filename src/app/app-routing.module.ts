

import { AssignmentComponent } from './assignment/assignment.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PracticeComponent } from './practice/practice.component';
import { GameControlComponent } from './game-control/game-control.component';



const routes: Routes = [
  { path: 'assignment', component: AssignmentComponent },
  { path: 'practice', component: PracticeComponent },
  { path: 'gamecontrol', component: GameControlComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }