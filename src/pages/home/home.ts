import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	public ort: string;
	public feed: Array<{content: string, color: string}>;
	public options: Array<string>;
	public typ: string;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.typ = this.navParams.data.Typ;
  	this.ort = "Stadttor";
  	this.feed = [{content: "Jemand kommt auf dich zu.", color: "primary"}, {content: "Du stehst vor einem großen Stadttor.", color: "primary"}];
  	this.options = ["Hallo sagen", "Weiter gehen", "Anrempeln", "Umarmung probieren"];
<<<<<<< HEAD
=======
	}
	
	continue(content: string, color: string) {
		console.log({content: content, color: color});
		this.feed.unshift({content: content, color: color});
	}
>>>>>>> 48dd804a76081eed35299c9dcbf3714db8e60ab6

  }
}
