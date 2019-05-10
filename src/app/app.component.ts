import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})


export class AppComponent implements OnInit, DoCheck {
  title = 'ZOO';
  contactEmail: string;
  /**
   *
   */
  constructor(private router: Router) {

  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  ngOnInit() {
    let age = 45;
    let name = 'demian';
    var pepe = { age, name };
  }

  ngDoCheck(): void {
    this.contactEmail = localStorage.getItem('email');
  }

  deleteEmail() {
    localStorage.removeItem('email');
  }

  goToKeepers() {
    this.router.navigate(['keepers'])
  }

  goToContact() {
    this.router.navigate(['contact'])
  }
}
