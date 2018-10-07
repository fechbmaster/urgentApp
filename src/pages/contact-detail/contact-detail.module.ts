import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ContactDetailPage } from './contact-detail';

@NgModule({
  declarations: [
    ContactDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactDetailPage),
    TranslateModule.forChild()
  ],
  exports: [
    ContactDetailPage
  ]
})
export class ItemDetailPageModule { }
