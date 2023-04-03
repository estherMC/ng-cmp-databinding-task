import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  chrono : number;
  // @Output() timer = new EventEmitter<{chronoEmit: number}>();
  @Output() timer = new EventEmitter<number>();
  interval;

  constructor() {
  }

  ngOnInit(): void {
  }

  onStartChrono(){
    this.chrono = 0;
    this.interval = setInterval(()=> {
      this.chrono = this.chrono+1;
      this.timer.emit(
        this.chrono
      )
    }, 100);
  }

  onStopChrono(){
    clearInterval(this.interval);
  }


}
