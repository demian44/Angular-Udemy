import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  readonly  TITLE: string = 'Welcome back pussy';
  constructor() { }

  ngOnInit() {
  }

}
