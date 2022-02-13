import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DBhomePageRoutingModule } from './dbhome-routing.module';

import { DBhomePage } from './dbhome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DBhomePageRoutingModule
  ],
  declarations: [DBhomePage]
})
export class DBhomePageModule {}
