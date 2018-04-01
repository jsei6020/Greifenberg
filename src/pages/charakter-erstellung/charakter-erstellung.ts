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


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {

  }

waehlen(Typ) {
    let prompt = this.alertCtrl.create({
      title: 'Wie Heißt du?',
      message: "Gib hier deinen Namen ein",
      inputs: [
        {
          name: 'Name',
          placeholder: 'Name'
        },
      ],
      buttons: [
        {
          text: 'Abbrechen',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Weiter',
          handler: data => {
            console.log('Saved clicked');
            this.navCtrl.push(HomePage, {
              Typ: Typ,
              Name: data.Name
            });
          }
        }
      ]
    });
    prompt.present();
  }
}







