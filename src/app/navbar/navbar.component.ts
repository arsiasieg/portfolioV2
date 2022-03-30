import { Component, OnInit } from '@angular/core';
import { Link } from '../shared/models/link.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navigations : Link[]

  constructor() {
    this.navigations = [
      new Link('person', 'A propos', 'about'),
      new Link('work', 'Projets', 'projects'),
      new Link('school', 'Expériences', '/'),
      new Link('email', 'Contact', '/'),
    ]
   }

  ngOnInit(): void {
  }

}
