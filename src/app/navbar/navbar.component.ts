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
      new Link('home','Accueil', '/home'),
      new Link('person', 'A propos', '/'),
      new Link('school', 'Expériences', '/'),
      new Link('work', 'Projets', '/'),
      new Link('email', 'Contact', '/'),
      new Link('dashboard', 'Dashboard', '/dashboard')
    ]
   }

  ngOnInit(): void {
  }

}
