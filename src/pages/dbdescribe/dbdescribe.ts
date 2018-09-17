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

@Component({
  selector: 'page-home',
  templateUrl: 'dbdescribe.html'
})

export class DbdescribePage {
  results$: Observable<any>;
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
      .get(url)
      .map(data => _.values(data))
      .do(console.log);
  }

  getTableStructure(form: NgForm) {
    this.runAPICall(form.value.tableName.toLowerCase());
  }

}
