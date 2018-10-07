import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ContactInvitePage } from './contact-invite';

@NgModule({
  declarations: [
    ContactInvitePage,
  ],
  imports: [
    IonicPageModule.forChild(ContactInvitePage),
    TranslateModule.forChild()
  ],
  exports: [
    ContactInvitePage
  ]
})
export class ItemCreatePageModule { }
