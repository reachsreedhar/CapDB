import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { NavController } from "ionic-angular";
import { MenuController } from "ionic-angular";

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { SettingsPage } from "../pages/settings/settings";

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  tabsPage = TabsPage;
  settingsPage = SettingsPage;
  @ViewChild('nav') nav: NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onLoad(page: any) {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }
}

/*
export class MyApp {
  tabsPage = TabsPage;
  settingsPage = SettingsPage;
  @ViewChild('nav') nav: NavController;

  constructor(platform: Platform, private menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  onLoad(page: any) {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }
}*/
