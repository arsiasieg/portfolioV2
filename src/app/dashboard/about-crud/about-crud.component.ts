import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Hobby } from 'src/app/shared/models/hobby.model';
import { Language } from 'src/app/shared/models/language.model';
import { User } from 'src/app/shared/models/user.model';
import { HobbyService } from 'src/app/shared/services/hobby.service';
import { LanguageService } from 'src/app/shared/services/language.service';
import { UserService } from 'src/app/shared/services/user.service';
import { HobbyFormComponent } from '../form/hobby-form/hobby-form.component';
import { LanguageformComponent } from '../form/languageform/languageform.component';

@Component({
  selector: 'app-about-crud',
  templateUrl: './about-crud.component.html',
  styleUrls: ['./about-crud.component.scss']
})
export class AboutCrudComponent implements OnInit {
  user: User|undefined;
  hobbies: Hobby[];
  languages: Language[];
  editMode:boolean;
  userForm =  this.fb.group({
    firstname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
    lastname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
    email: ['', [Validators.required, Validators.email, Validators.minLength(5), Validators.maxLength(100)]],
    address: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
    phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(18)]],
    description: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(350)]],
  })

  constructor(
    private userService: UserService,
    private hobbyService : HobbyService,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private languageService : LanguageService) {
      this.hobbies = [];
      this.languages = [];
      this.editMode = false;
   }

  ngOnInit(): void {
    this.getUsers();
    this.getHobbies();
    this.getLanguages();
  }

  //ABOUT
  getUsers(){
    this.userService.getUsers().subscribe({
      next : (users) => {
        this.user = users[0];
        this.userForm = this.fb.group({
          firstname: [this.user?.firstname, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
          lastname: [this.user?.lastname, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
          email: [this.user?.email, [Validators.required, Validators.email, Validators.minLength(5), Validators.maxLength(100)]],
          address: [this.user?.address, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
          phone: [this.user?.phone, [Validators.required, Validators.minLength(10), Validators.maxLength(18)]],
          description: [this.user?.description, [Validators.required, Validators.minLength(5), Validators.maxLength(350)]],
        })
      },
      error: () => {
        console.log("Erreur de récupération des users")
      }
    })
  }

  switchEditMode(){
    this.editMode = !this.editMode;
  }

  editUser(){
    const user: User = this.userForm.value;
    if(this.user != undefined)
      this.userService.updateUser(user, this.user.id).subscribe({
        next: () => {
          console.log("Success")
          this.switchEditMode();
          this.getUsers();
        },
        error: () => {
          console.log("Error")
        }
      })
  }

  //HOBBIES
  getHobbies(){
    this.hobbyService.getHobbies().subscribe({
      next: (hobbies) => {
        this.hobbies = hobbies;
      }
    })
  }

  //Ouverture du formulaire de création de hobby
  openCreateHobbyForm() {
    this.dialog.open(HobbyFormComponent);
    this.refreshAfterCloseDialog("hobbies");
  }

  //Ouverture du formulaire d'édition du hobby donné
  openUpdateHobbyForm(id: number){
    this.dialog.open(HobbyFormComponent, {
      data: {
        id,
      },
    });
    this.refreshAfterCloseDialog("hobbies");
  }

  deleteHobby(id: number){
    if (confirm('Confirmez vous la suppression de ce loisir ?')) {
      this.hobbyService.deleteHobby(id).subscribe({
        next: () => {
          this.getHobbies();
        },
        error: () => {
          console.log("Erreur lors de la suppression du hobby")
        },
      });
    } else {
      return;
    }
  }

  
  //LANGUAGES
  getLanguages(){
    this.languageService.getLanguages().subscribe({
      next: (languages) => {
        this.languages = languages;
      }
    })
  }

   //Ouverture du formulaire de création de langage
   openCreateLanguageForm() {
    this.dialog.open(LanguageformComponent);
    this.refreshAfterCloseDialog("languages");
  }

  //Ouverture du formulaire d'édition du langage donné
  openUpdateLanguageForm(id: number){
    this.dialog.open(LanguageformComponent, {
      data: {
        id,
      },
    });
    this.refreshAfterCloseDialog("languages");
  }

  deleteLanguage(id: number){
    if (confirm('Confirmez vous la suppression de ce loisir ?')) {
      this.languageService.deleteLanguage(id).subscribe({
        next: () => {
          this.getLanguages();
        },
        error: () => {
          console.log("Erreur lors de la suppression du hobby")
        },
      });
    } else {
      return;
    }
  }

  //Refresh le composant après fermeture du formulaire
  refreshAfterCloseDialog(domain: string) {
    this.dialog.afterAllClosed.subscribe({
      next: () => {
        if(domain == "hobbies") this.getHobbies();
        if(domain == "languages") this.getLanguages();
      },
      error: () => {
        console.log("Erreur lors de la fermeture du dialog")
      },
    });
  }


}
