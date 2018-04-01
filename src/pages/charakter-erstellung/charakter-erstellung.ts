import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the CharakterErstellungPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-charakter-erstellung',
  templateUrl: 'charakter-erstellung.html',
})
export class CharakterErstellungPage {

  hello;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.hello = "Hello";
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CharakterErstellungPage');

  }

waehlen(typ) {
this.navCtrl.push(HomePage, {
      Typ: typ
    });
}

}
