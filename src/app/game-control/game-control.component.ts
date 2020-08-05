import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter <number>();
  lastnumber = 0;
  interval;
  constructor() { }

  ngOnInit(): void {
  }

  onStartGame(){
    this.interval = setInterval(()=>{
      this.intervalFired.emit(this.lastnumber + 1);
      this.lastnumber++;
    },1000)
  }

}
