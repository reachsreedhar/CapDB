import { Component, Injectable, VERSION } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { Response } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import * as _ from 'lodash';

interface Col {
  name: string;
  type: string;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
}) 

export class HomePage {
  public url = 'http://10.10.3.10:8080/ords/cap/';
  results$: Observable<Column[]>;

  constructor(public navCtrl: NavController, public http: HttpClient) {};

  runAPICall (tab: string) {
    console.log('Running API call...');

    this.doSearch(tab);
  }

  doSearch(table: string) {
    let url2 = this.url + 'metadata-catalog' + '/' + table + '/';
    console.log(url2);
    this.results$ = this.http
      .get<Column[]>(url2)
      .map(data => _.values(data))
      .do(console.log);
  }

  getTableStructure(form: NgForm) {
    this.runAPICall(form.value.tableName.toLowerCase());
  }

}
