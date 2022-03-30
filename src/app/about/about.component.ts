import { Component, OnInit } from '@angular/core';
import { Hobby } from '../shared/models/hobby.model';
import { Language } from '../shared/models/language.model';
import { User } from '../shared/models/user.model';
import { HobbyService } from '../shared/services/hobby.service';
import { LanguageService } from '../shared/services/language.service';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  user: User|undefined;
  hobbies: Hobby[];
  languages : Language[];

  constructor(private userService: UserService, private hobbyService : HobbyService, private languageService : LanguageService) {
    this.hobbies = [];
    this.languages = []
  }

  ngOnInit(): void {
    //USERS
    this.userService.getUsers().subscribe({
      next : (users) => {
        this.user = users[0];
      },
      error: () => {
        console.log("Erreur de récupération des users")
      }
    })

    //HOBBIES
    this.hobbyService.getHobbies().subscribe({
      next : (hobbies) => {
        this.hobbies = hobbies;
      },
      error: () => {
        console.log("Erreur de récupération des hobbies")
      }
    })

    //LANGUAGES
    this.languageService.getLanguages().subscribe({
      next : (languages) => {
        this.languages = languages;
      },
      error: () => {
        console.log("Erreur de récupération des languages")
      }
    })
  }

}
