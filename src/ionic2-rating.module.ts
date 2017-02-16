import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
    BrowserModule,
    IonicModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class Ionic2RatingModule {}