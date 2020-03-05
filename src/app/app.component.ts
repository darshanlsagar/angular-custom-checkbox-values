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
  fcl1 = new FormControl();
  fcl2 = new FormControl();
  cb2: any = "Y";
  fcp = new FormControl();

  constructor(){
	window.x = this;
  }

  toggleCB(){
	//   let this.cb2 = this.this.cb22;
	  if(this.cb2){
		this.cb2 = false;
	  } else {
		  this.cb2 = Math.random();
	  }
  }
}
