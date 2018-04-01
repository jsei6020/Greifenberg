import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.hello = "Hello";
  }

showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Wie Heißt du?',
      message: "gib hier deinen Namen ein",
      inputs: [
        {
          name: 'title',
          placeholder: 'Name'
        },
      ],
      buttons: [
        {
          text: 'abbrechen',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'weiter',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();


  }


waehlen(Typ){
this.showPrompt();
this.navCtrl.push(HomePage, {
      Typ: typ
    });
}

}







