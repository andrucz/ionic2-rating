import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Ionic2Rating } from './ionic2-rating';

const IONIC2_RATING_DIRECTIVES = [Ionic2Rating];

@NgModule({
  imports: [IonicModule],
  declarations: IONIC2_RATING_DIRECTIVES,
  exports: IONIC2_RATING_DIRECTIVES
})
export class Ionic2RatingModule {}