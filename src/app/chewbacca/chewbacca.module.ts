import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChewbaccaPage } from './chewbacca.page';

const routes: Routes = [
  {
    path: '',
    component: ChewbaccaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChewbaccaPage]
})
export class ChewbaccaPageModule {}
