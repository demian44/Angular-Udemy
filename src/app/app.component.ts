import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, DoCheck {
  title = 'ZOO';
  contactEmail: string;

  ngOnInit() {
    let age = 45;
    let name = 'demian';
    var pepe = {age,name};
  }

  ngDoCheck(): void {
    this.contactEmail = localStorage.getItem('email');
  }

  deleteEmail(){
    localStorage.removeItem('email');
  }
}
