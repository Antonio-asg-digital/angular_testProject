import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  TaskListComponent  from 'asgcomplibrary';
import { AppComponent } from '../app.component';

@NgModule({
  imports: [
    BrowserModule,
    TaskListComponent
  ],
  providers: [],
  bootstrap: [AppComponent] // Make sure you have a root component like AppComponent
})
export class AppModule {}
