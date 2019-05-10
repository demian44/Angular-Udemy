import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
  animations: [
    trigger("marcar", [
      state('inactive', style({
        border: '5px solid gray'
      }
      )),
      state('active', style({
        border: '5px solid yellow',
        background: 'red',
        borderRadius: '15px'
      }
      )),
      transition('inactive => active', animate('3s linear')),
      transition('active => inactive', animate('3s linear'))
    ])
  ]

})
export class StoreComponent implements OnInit {
  public title: string;
  public vegetacion: string;
  active: string = 'inactive';
  vegetationTypes = ["Tropical", "Sub Tropical", "Arid", "Mix"];
  constructor() {
    this.title = "Testing Title";
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Father:");
    console.log(changes);
  }

  changeActive() {
    this.active = this.active === 'active' ? 'inactive' : 'active';
  }

  ngOnInit() {
    $('#textJq').hide();
    $('#btnJq').click(
      () => $('#textJq').slideToggle()
    );
    $('#caja').dotdotdot({});
  }

  testKeyUp() {
    console.log(this.title);
  }

  reactToTheEvent($event) {
    console.log("Evento: ");
    console.log($event);
  }

}
