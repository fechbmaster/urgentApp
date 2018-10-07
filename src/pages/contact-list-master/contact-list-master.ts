import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { Contact } from '../../models/contact';
import { Contacts } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'contact-list-master.html'
})
export class ContactListMasterPage {
  currentItems: Contact[];

  constructor(public navCtrl: NavController, public items: Contacts, public modalCtrl: ModalController) {
    this.currentItems = this.items.query();
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {
    let addModal = this.modalCtrl.create('ContactInvitePage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    });
    addModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.items.delete(item);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Contact) {
    this.navCtrl.push('ContactDetailPage', {
      item: item
    });
  }
}
