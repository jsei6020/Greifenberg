import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	public ort: string;
	public feed: Array<string>;
	public options: Array<string>;

  constructor(public navCtrl: NavController) {
  	this.ort = "Stadttor";
  	this.feed = ["Du stehst vor einem großen Stadttor.", "Jemand kommt auf dich zu."];
  	this.options = ["Hallo sagen", "Weiter gehen", "Anrempeln", "Umarmung probieren"];
	}
	
	continue(option: string) {
		this.feed.unshift(option);
	}

}
