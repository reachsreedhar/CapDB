import { Component } from '@angular/core';

import { Toggle, NavController } from 'ionic-angular';
import { SettingsService } from "../../services/settings";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(private settingsService: SettingsService, private navCtrl: NavController) {}

  /*onSave() {
    console.log('onSave');
    console.log(this.toppings);
  }

  onCancel() {
    console.log('onCancel');
  }

  presentPopover(myEvent) {
    console.log(settingsService.zone.kind);
  }*/
}
