import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from '@angular/material/table';
import {HttpClientModule} from "@angular/common/http";
import { CoursComponent } from './cours/cours.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { TopicsComponent } from './topics/topics.component';
import { PostComponent } from './post/post.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CreateTopicComponent } from './create-topic/create-topic.component';
import { CreateTopicDialogComponent } from './create-topic-dialog/create-topic-dialog.component';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    CoursComponent,
    TopicsComponent,
    PostComponent,
    BreadcrumbComponent,
    CreateTopicComponent,
    CreateTopicDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatSortModule,
    CKEditorModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
