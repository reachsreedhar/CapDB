import { Component, Injectable, VERSION } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { Response } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import * as _ from 'lodash';

import { DbdescribePage } from '../dbdescribe/dbdescribe';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  dbdescribePage = DbdescribePage;
  constructor(public navCtrl: NavController, public http: HttpClient) {};

  getTableStructure() {
    this.navCtrl.push(this.dbdescribePage);
  }

}
