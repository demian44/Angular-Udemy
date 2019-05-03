import { Component, OnInit, Input, Output, EventEmitter, OnChanges, OnDestroy, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-park',
  templateUrl: './park.component.html',
  styleUrls: ['./park.component.css']
})
export class ParkComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
  ngOnDestroy(): void {
    console.log("Se mamo");
  }
  ngDoCheck(): void {
    console.log('Do check!!');
  }

  ngOnInit() {
    console.log("ngOnInit");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges");
  }

  name: string;
  meters: number;
  open: boolean;
  show: boolean;
  array = ["First", "Second", "Third", "Fourd"];

  title = 'materialApp';
  @Input('the_vegetation') vegetation: string;


  @Input() testingInput: string;
  @Output() gameEnded = new EventEmitter();

  /**
   *
   */
  constructor() {
    this.open = false;
    this.show = false;
  }

  ChangeOpen(): void {
    this.show = !this.show;
  }

  EmittEvent() {
    this.gameEnded.emit({
      name: this.name,
      meters: this.meters,
      vegetation: this.vegetation,
      open: this.open,
      array: this.array
    });
  }


}
