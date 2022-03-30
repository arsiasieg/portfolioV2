import { Component, OnInit } from '@angular/core';
import { Project } from '../shared/models/project.model';
import { Technologie } from '../shared/models/technologie.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  
  constructor() {
    this.projects = [];
   }

  ngOnInit(): void {
    this.projects = [
      new Project(
        1,
        "Genshin impact - Characters informations",
        "https://webstatic-sea.hoyoverse.com/upload/contentweb/2022/03/18/27bd67543e026112c589f9400f1ae415_4947727461911554028.jpg",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis iste esse fugiat maxime ipsum. Voluptatem, temporibus. Illo asperiores quos earum veritatis, id consequatur, quas delectus illum, assumenda dolorum magnam et",
        [
          new Technologie(1, "Angular"),
          new Technologie(2, "Java")
        ],
        "en cours",
        "https://www.github.fr",
        "https://www.google.fr")
    ]
  }

}
