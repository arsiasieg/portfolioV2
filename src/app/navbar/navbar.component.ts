import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  icons : string[]

  constructor() {
    this.icons = [
      'home',
      'person',
      'school',
      'work',
      'email'
    ]
   }

  ngOnInit(): void {
  }

}
