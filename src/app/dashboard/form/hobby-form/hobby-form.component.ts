import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Hobby } from 'src/app/shared/models/hobby.model';
import { HobbyService } from 'src/app/shared/services/hobby.service';

@Component({
  selector: 'app-hobby-form',
  templateUrl: './hobby-form.component.html',
  styleUrls: ['./hobby-form.component.scss']
})
export class HobbyFormComponent implements OnInit {
  hobby: Hobby|undefined;
  updateIcon: string;
  hobbyForm = this.fb.group({
    iconName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
    description: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]]
  })

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private hobbyService : HobbyService, private fb : FormBuilder) {
    this.updateIcon = '';
  }

  ngOnInit(): void {
    if(this.data != undefined){
      this.hobbyService.getHobbyById(this.data.id).subscribe({
        next: (hobby) => {
          this.hobby = hobby;
          this.updateIcon = hobby.iconName;
          this.hobbyForm = this.fb.group({
            iconName: [hobby.iconName, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
            description: [hobby.description, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]]
          })
        },
        error: () => {
          console.log("Erreur lors de la récupération du hobby par id")
        }
      })
    }
  }

  updateIconName(){
    this.updateIcon = this.hobbyForm.controls['iconName'].value;
    console.log(this.updateIcon)
  }


  submitForm(){
    const hobby = this.hobbyForm.value;
    //EDITION
    if(this.hobby != undefined){
      this.hobbyService.updateHobby(hobby, this.hobby.id).subscribe({
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
      this.hobbyService.createHobby(hobby).subscribe({
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
