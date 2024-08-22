import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import TaskModule from 'asgcomplibrary';
import InboxScreenComponent from 'asgcomplibrary';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Corrected property name from 'styleUrl' to 'styleUrls'
})
export class AppComponent implements OnInit {
  title = 'angular-app';

  ngOnInit() {
    
  }
}
