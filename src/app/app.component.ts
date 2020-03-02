import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

declare var window: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives';
  v= new FormControl();

  constructor(){
	window.x = this;
  }
}
