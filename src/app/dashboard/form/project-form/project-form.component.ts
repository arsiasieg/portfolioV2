import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Project } from 'src/app/shared/models/project.model';
import { Technologie } from 'src/app/shared/models/technologie.model';
import { ProjectService } from 'src/app/shared/services/project.service';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit {
  project: Project|undefined;
  technologiesArray: Technologie[];
  addTechnologies: Technologie[]|undefined;
  statutsArray: string[]
  projectForm = this.fb.group({
    title: ['', Validators.required],
    image: ['', Validators.required],
    description: ['', Validators.required],
    technologies: ['', Validators.required],
    statut : ['', Validators.required],
    github: [''],
    link: ['']
  })

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private projectService: ProjectService, private fb: FormBuilder) {
    this.technologiesArray = [
      new Technologie(1, "Angular"),
      new Technologie(2, "Java"),
      new Technologie(3, "JavaScript"),
      new Technologie(4, "PHP"),
    ];
    this.statutsArray = [
      "en cours",
      "terminé"
    ]
   }

  ngOnInit(): void {
    if(this.data != undefined){
      this.projectService.getProjectById(this.data.id).subscribe({
        next: (project) => {
          this.project = project;
          this.projectForm = this.fb.group({
            title: [project.title, Validators.required],
            image: [project.image, Validators.required],
            description: [project.description, Validators.required],
            technologies: [project.technologies, Validators.required],
            statut : [project.statut, Validators.required],
            github: [project.github],
            link: [project.link]
          })
        },
        error: () => {
          console.log("Erreur lors de la récupération du projet par id")
        }
      })
    }
  }

  submitForm(){
    //EDITION
    if(this.project != undefined){
      this.projectService.updateProject(this.projectForm.value, this.project.id).subscribe({
        next : () => {
          console.log("Edition !");
        },
        error : () => {
          console.log("Erreur d'update")
        }
      })
    }
    //CREATION
    else{
      this.projectService.createProject(this.projectForm.value).subscribe({
        next : () => {
          console.log("Création !");
        },
        error : () => {
          console.log("Erreur de création")
        }
      })
    }
  }
}
