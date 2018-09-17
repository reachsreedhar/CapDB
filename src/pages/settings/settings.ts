import { Component } from '@angular/core';

import { Toggle, NavController } from 'ionic-angular';
import { SettingsService } from "../../services/settings";
import { TabsPage } from "../tabs/tabs";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(private navCtrl: NavController) {}

  onClose() {
    this.navCtrl.setRoot(TabsPage);
  }
}
