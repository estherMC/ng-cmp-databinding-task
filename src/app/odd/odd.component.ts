import { Component, OnInit, Input, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {

  @Input('chrono') element: number;
  @ContentChild('oddTimer', {static:true}) paragraph: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

}
