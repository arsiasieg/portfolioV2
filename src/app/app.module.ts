import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ContactComponent } from './contact/contact.component';
import { MentionslegalesComponent } from './mentionslegales/mentionslegales.component';
import { ProjectsComponent } from './projects/projects.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutCrudComponent } from './dashboard/about-crud/about-crud.component';
import { ExperiencesCrudComponent } from './dashboard/experiences-crud/experiences-crud.component';
import { ProjectsCrudComponent } from './dashboard/projects-crud/projects-crud.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HobbyFormComponent } from './dashboard/form/hobby-form/hobby-form.component';


//MATERIAL
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { LanguageformComponent } from './dashboard/form/languageform/languageform.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    ExperiencesComponent,
    ContactComponent,
    MentionslegalesComponent,
    ProjectsComponent,
    DashboardComponent,
    AboutCrudComponent,
    ExperiencesCrudComponent,
    ProjectsCrudComponent,
    HobbyFormComponent,
    LanguageformComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
