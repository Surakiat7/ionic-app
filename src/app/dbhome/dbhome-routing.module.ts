import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DBhomePage } from './dbhome.page';

const routes: Routes = [
  {
    path: '',
    component: DBhomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DBhomePageRoutingModule {}
