import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {CoursComponent} from "./cours/cours.component";
import {TopicsComponent} from "./topics/topics.component";
import {PostComponent} from "./post/post.component";
import {AuthGuard} from "./auth/auth.guard";


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'cours', component: CoursComponent},
  {path: 'topic/:idCours', component: TopicsComponent},
  {path: 'post/:idTopic', component: PostComponent}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
