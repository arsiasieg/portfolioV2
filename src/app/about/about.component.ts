import { Component, OnInit } from '@angular/core';
import { Hobby } from '../shared/models/hobby.model';
import { Language } from '../shared/models/language.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  hobbies: Hobby[];
  languages : Language[];

  constructor() {
    this.hobbies = [
      new Hobby(1, 'thinking','Créer de manière générale'),
      new Hobby(2, 'infography', 'Infographie'),
      new Hobby(3, 'game', 'Jeux vidéo et de société'),
      new Hobby(4, 'anime', 'Animes et mangas'),
      new Hobby(5, 'archer', 'Tir à l\'arc'),
      new Hobby(6, 'music', 'Musique'),
      new Hobby(7, 'beer', 'BBB (Boire une Bière dans un Bar)')
    ];

    this.languages = [
      new Language(1, 'french', 'Francais'),
      new Language(2, 'english', 'Anglais'),
      new Language(3, 'japan', 'Japonais')
    ]
  }

  ngOnInit(): void {
  }

}
