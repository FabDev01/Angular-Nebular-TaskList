import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './modules/material-module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { DialogAddComponent } from './task/dialog-add/dialog-add.component';
import { DialogEditComponent } from './task/dialog-edit/dialog-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';
import {TaskService} from '../app/services/task.service'
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    DialogAddComponent,
    DialogEditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TaskService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
