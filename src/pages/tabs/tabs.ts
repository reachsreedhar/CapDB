import { Component } from '@angular/core';
import { DbconfigPage } from '../dbconfig/dbconfig';
import { HelpPage } from '../help/help';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})

export class TabsPage {
  dbconfigPage = DbconfigPage;
  helpPage = HelpPage;
  aboutPage = AboutPage;
}
