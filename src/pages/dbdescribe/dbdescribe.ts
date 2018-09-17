import { Component, Injectable, VERSION } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { Response } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import * as _ from 'lodash';

import { SettingsService } from "../../services/settings";

interface Table {
  name: [];
  primaryKey: [];
  columns: [];
  weblinks: [];
}

@Component({
  selector: 'page-home',
  templateUrl: 'dbdescribe.html'
})

export class DbdescribePage {
  results$: Observable<Table[]>;
  public tarr = [];

  constructor(public navCtrl: NavController, public http: HttpClient, private settingsService: SettingsService) {};

  runAPICall (tab: string) {
    console.log('Running API call...');

    this.doSearch(tab);
  }

  doSearch(table: string) {
    let url = 'https://' + this.settingsService.dbSet.ip + ':8443/ords/cap/' + 'metadata-catalog' + '/' + table + '/';
    console.log('from Settings Page : ' + url);
    this.results$ = this.http
      .get<Column[]>(url)
      .map(data => _.values(data))
      .do(console.log);

    //let tempresult = this.result$[2];
    //this.results$.function(value) { console.log(value);};

    this.http.get(url).subscribe((data) => {
      console.log(data.members);
      this.tarr = data;
    });

  }

  getTableStructure(form: NgForm) {
    this.runAPICall(form.value.tableName.toLowerCase());
  }

}
