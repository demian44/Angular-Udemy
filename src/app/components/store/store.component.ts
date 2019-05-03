import { Component, OnInit,OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']

})
export class StoreComponent implements OnInit {
  public title: string;
  public vegetacion: string;
  vegetationTypes = ["Tropical", "Sub Tropical", "Arid", "Mix"];
  constructor() {
    this.title = "Testing Title";
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Father:");
    console.log(changes);
  }

  ngOnInit() {
  }

  testKeyUp() {
    console.log(this.title);
  }

  reactToTheEvent($event) {
    console.log("Evento: ");
    console.log($event);
  }

}
