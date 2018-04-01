import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CharakterErstellungPage } from './charakter-erstellung';

@NgModule({
  declarations: [
    CharakterErstellungPage,
  ],
  imports: [
    IonicPageModule.forChild(CharakterErstellungPage),
  ],
})
export class CharakterErstellungPageModule {}
