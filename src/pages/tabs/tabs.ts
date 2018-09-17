import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { HelpPage } from '../help/help';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})

export class TabsPage {
  homePage = HomePage;
  helpPage = HelpPage;
  aboutPage = AboutPage;
}
