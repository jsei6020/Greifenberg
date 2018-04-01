import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

export class entscheidung {
	Händler: Array<string>;
	Dieb: Array<string>;
	Beamter: Array<string>;

	constructor(Händler: Array<string>, Dieb: Array<string>, Beamter: Array<string>) {
			this.Händler = Händler;
			this.Dieb = Dieb;
			this.Beamter = Beamter;
	}
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	public ort: string;
	public zustand: number;
	public feed: Array<{content: string, color: string}> = [];
	public options: Array<string>;
	public typ: string;
	public name: string;
	public e: Array<entscheidung> = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {	
		this.typ = this.navParams.data.Typ;
		this.name = "Hans Zimmer";
		this.ort = "Stadttor";
		this.zustand = 1;
		this.setE();
		if(this.typ == "Händler") {
			this.feed.unshift({content: `Nach einer langen Reise auf deinem Wagen kommst du nun endlich in Greifenberg an. Vor dir erheben sich die massiven Stadtmauern. 
			Am Stadttor hat sich eine lange Schlange gebildet, da die Wachsoldaten viel zu langsam die ankommenden Wagen nach zu verzollenden Gütern zu durchsuchen. Dein Wagen ist leer.
			Dein Plan ist hier in Greifenberg mit dem führenden Handelshaus Greifendurm gute Beziehungen zu beginnen. Du überlässt den Karren deinem Fahrer und spazierst entlang der Warteschlange zum Stadtor.
			Du stehst vor einem großen Stadttor.`, color: "primary"});
		}
		if(this.typ == "Beamter") {
			this.feed.unshift({content: `Nach einer langen Reise auf deinem Pferd kommst du nun endlich in Greifenberg an. Vor dir erheben sich die massiven Stadtmauern. 
			Am Stadttor hat sich eine lange Schlange gebildet, da die Wachsoldaten viel zu langsam die ankommenden Wagen nach zu verzollenden Gütern zu durchsuchen.
			Du wurdest hier hergeschickt, um schnellstmöglich den entführten Anführer des Handelshauses Greifendurm zu befreien. Dieser wurde vor zwei Tagen vom Nachtlager geraubt.
			Deshalb wurdest Du, der vernatwortliche Komissar zur unter Stützung durch die Grafschaft gesandt.`, color: "primary"});
		}
		if(this.typ == "Dieb") {
			this.feed.unshift({content: `Nach einer langen Reise zu Fuß kommst du nun endlich in Greifenberg an. Vor dir erheben sich die massiven Stadtmauern. 
			Am Stadttor hat sich eine lange Schlange gebildet, da die Wachsoldaten viel zu langsam die ankommenden Wagen nach zu verzollenden Gütern zu durchsuchen.
			Du bist hierhergekommen, um mit deinem Partner das Oberhaupt des führenden Handelshauses in Greifenberg zu entführen. 
			Dadurch erhoffst Du dir die Koordinaten des Verstecks seines Schatzes zu erfahren.`, color: "primary"});
		}
		this.options = ["Weiter", "-", "-", "-"];
  	this.ort = "Stadttor";
	}
	
	continue(content: string, color: string) {
		if(content != "Weiter") {
			this.feed.unshift({content: content, color: "option" + color});
		}
		if(this.zustand + "" + color == "10") {
			this.feed.unshift({content: "Eine schwarzhaarige Frau in der Uniform der Greifenberger Wachen scheint direkt auf dich zuzukommen.", color: "primary"});
			this.options = this.e[0][this.typ];
			this.zustand = 2;
		}
		else if(this.zustand + "" + color == "20") {
			this.feed.unshift({content: "Guten Tag, und Sie sind?", color: "primary"});
  		this.options = this.e[1][this.typ];
		}
		if(this.zustand + "" + color == "21") {
			this.feed.unshift({content: `Du schreitest unter durch das riesige, zweigflüglete Tor und betrittst die Straßen Greifenbergs.
			 Vor dir stehen zwei Wagenlenker, die miteinander streitend inmitten umgefallener Gemüsekisten stehen.`, color: "primary"});

		}
	}

	setE() : void {
		let e = new entscheidung(["Hallo sagen", "Weiter gehen", "Salutieren", "-"], 
		["Hallo sagen", "Weiter gehen", "Bestehlen", "-"], 
		["Hallo sagen", "Weiter gehen", "Salutieren", "-"]);
		this.e.push(e);
		e = new entscheidung(["Mein Name ist " + this.name + "!", "Das geht Sie gar nichts an.", "Mit wem habe ich denn die Ehre?", "-"], 
		["Mein Name ist " + this.name + "!", "Das geht Sie gar nichts an.", "Mit wem habe ich denn die Ehre?", "-"], 
		["Mein Name ist " + this.name + "!", "Das geht Sie gar nichts an.", "Mit wem habe ich denn die Ehre?", "-"]);
		this.e.push(e);
	}
}

