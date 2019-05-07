import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title: string;
  email: string;

  constructor() { }

  ngOnInit() {
  }

  saveEmail() {
    console.log(`save email ${this.email}`);
    localStorage.setItem(`email`,this.email);
  }

}
