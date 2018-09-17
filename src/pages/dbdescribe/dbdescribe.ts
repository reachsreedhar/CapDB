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
  //public url = 'http://10.10.3.10:8080/ords/cap/';
  public url = 'https://10.10.3.10:8443/ords/cap/';
  results$: Observable<Table[]>;
  public tarr = [];

  constructor(public navCtrl: NavController, public http: HttpClient, private settingsService: SettingsService) {};

  runAPICall (tab: string) {
    console.log('Running API call...');

    this.doSearch(tab);
  }

  doSearch(table: string) {
    //let url2 = this.url + 'metadata-catalog' + '/' + table + '/';
    let url2 = 'https://' + this.settingsService.dbSet.ip + ':8443/ords/cap/' + 'metadata-catalog' + '/' + table + '/';
    console.log('from Settings Page : ' + url2);
    this.results$ = this.http
      .get<Column[]>(url2)
      .map(data => _.values(data))
      .do(console.log);

    //let tempresult = this.result$[2];
    //this.results$.function(value) { console.log(value);};

    this.http.get(url2).subscribe((data) => {
      console.log(data.members);
      this.tarr = data;
    });

  }

  getTableStructure(form: NgForm) {
    this.runAPICall(form.value.tableName.toLowerCase());
  }

}
