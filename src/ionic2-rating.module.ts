import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';

import { Ionic2Rating } from './ionic2-rating';

@NgModule({
  declarations: [
    Ionic2Rating
  ],
  exports: [
    Ionic2Rating
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class Ionic2RatingModule { }
