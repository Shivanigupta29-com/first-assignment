import { FavouriteComponent } from './practice/favourite.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { AppRoutingModule } from './app-routing.module';
import { PracticeComponent } from './practice/practice.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';

@NgModule({
  declarations: [
    AppComponent,
    AssignmentComponent,
    PracticeComponent,
    FavouriteComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule

 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
