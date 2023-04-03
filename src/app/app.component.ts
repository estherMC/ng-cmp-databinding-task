import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  timerElements = [];

  // onTimerExecuted(interval: {chronoEmit: number}){
  onTimerExecuted(chronoEmit: number){
    this.timerElements.push(chronoEmit);
  }


}
