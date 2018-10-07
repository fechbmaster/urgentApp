import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Contacts } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'contact-detail.html'
})
export class ContactDetailPage {
  item: any;

  constructor(public navCtrl: NavController, navParams: NavParams, items: Contacts) {
    this.item = navParams.get('item') || items.defaultItem;
  }

}
