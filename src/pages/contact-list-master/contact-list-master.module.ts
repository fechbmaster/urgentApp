import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ContactListMasterPage } from './contact-list-master';

@NgModule({
  declarations: [
    ContactListMasterPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactListMasterPage),
    TranslateModule.forChild()
  ],
  exports: [
    ContactListMasterPage
  ]
})
export class ListMasterPageModule { }
