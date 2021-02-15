import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {CoursComponent} from "./cours/cours.component";

const routes: Routes = [
  {path : 'login', component: LoginComponent},
  {path : 'cours',component: CoursComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
