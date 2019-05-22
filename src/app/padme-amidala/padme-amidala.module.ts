import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PadmeAmidalaPage } from './padme-amidala.page';

const routes: Routes = [
  {
    path: '',
    component: PadmeAmidalaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PadmeAmidalaPage]
})
export class PadmeAmidalaPageModule {}
