import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  params: Object;
  list: any;
  constructor(public navCtrl: NavController) {
    this.list = ListPage;
    this.params = { id: 42 };
  }

}
