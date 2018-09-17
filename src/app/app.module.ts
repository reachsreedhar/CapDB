import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { HelpPage } from '../pages/help/help';
import { TabsPage } from '../pages/tabs/tabs';
import { HttpClientModule } from '@angular/common/http';
import { SettingsService } from "../services/settings";
import { SettingsPage } from "../pages/settings/settings";
import { DbdescribePage } from "../pages/dbdescribe/dbdescribe";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HelpPage,
    TabsPage,
    HomePage,
    SettingsPage,
    DbdescribePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HelpPage,
    TabsPage,
    HomePage,
    SettingsPage,
    DbdescribePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SettingsService
  ]
})
export class AppModule {}
