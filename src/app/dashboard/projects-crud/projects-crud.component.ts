import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Project } from 'src/app/shared/models/project.model';
import { ProjectService } from 'src/app/shared/services/project.service';
import { ProjectFormComponent } from '../form/project-form/project-form.component';

@Component({
  selector: 'app-projects-crud',
  templateUrl: './projects-crud.component.html',
  styleUrls: ['./projects-crud.component.scss']
})
export class ProjectsCrudComponent implements OnInit {
  projects: Project[];

  constructor(
    private projectService: ProjectService, private dialog: MatDialog) {
      this.projects = [];
   }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(){
    this.projectService.getProjects().subscribe({
      next : (projects) => {
        this.projects = projects;
      },
      error: () => {
        console.log("Erreur de récupération des projets")
      }
    })
  }

  //Ouverture du formulaire de création de projet
  openCreateProjectForm() {
    this.dialog.open(ProjectFormComponent);
    this.refreshAfterCloseDialog();
  }

  //Ouverture du formulaire d'édition du projet donné
  openUpdateProjectForm(id: number){
    this.dialog.open(ProjectFormComponent, {
      data: {
        id,
      },
    });
    this.refreshAfterCloseDialog();
  }

  deleteProject(id: number){
    if (confirm('Confirmez vous la suppression de ce projet ?')) {
      this.projectService.deleteProject(id).subscribe({
        next: () => {
          this.getProjects();
        },
        error: () => {
          console.log("Erreur lors de la suppression du project")
        },
      });
    } else {
      return;
    }
  }


  //Refresh le composant après fermeture du formulaire
  refreshAfterCloseDialog() {
    this.dialog.afterAllClosed.subscribe({
      next: () => {
        this.getProjects();
      },
      error: () => {
        console.log("Erreur lors de la fermeture du dialog")
      },
    });
  }

}
