import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path : "",
    component : HomeComponent
  },
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path: 'dashboard',
    component : DashboardComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64],
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
