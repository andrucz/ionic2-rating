ionic2-rating
=============

An Angular 4 (formerly Angular 2) component to visualize a star rating bar, built for Ionic 2+.

![Preview][preview-image]

[![Build Status][travis-image]][travis-url] [![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][downloads-url]

[![NPM][nodei-image]][nodei-url]

## How to install:

```
$ npm install --save ionic2-rating
```

## How to use:

Import `Ionic2RatingModule` on module definition that declares the page where you want to add the rating component. In some cases, all pages are declared on `src/app/app.module.ts`.
```typescript
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// Import ionic2-rating module
import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    Ionic2RatingModule // Put ionic2-rating module here
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: []
})
export class AppModule {}
```
If you are using `Lazy Loading` in your application, add the `Ionic2RatingModule` to the page module instead of the app module.
```typescript
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePage } from './profile';
import { Ionic2RatingModule } from "ionic2-rating";

@NgModule({
  declarations: [
    ProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),
    Ionic2RatingModule // Put ionic2-rating module here
  ],
  exports: [
    ProfilePage
  ]
})

export class ProfilePageModule { }
```

Include the component on page template, like the example below:
```HTML
<rating [(ngModel)]="rate" 
        readOnly="false" <!--default value-->
        max="5" <!--default value-->
        emptyStarIconName="star-outline" <!--default value-->
        halfStarIconName="star-half" <!--default value-->
        starIconName="star" <!--default value-->
        nullable="false" <!--default value-->
        (ngModelChange)="onModelChange($event)"> <!--use it when you need to do something when user clicks on a star. in case you only need to change ngModel property, this property can be ommited.-->
</rating>
```

### You may also need to customize component styles:

```CSS
ul {
  padding: 0px;

  &.rating li {
    padding: 5px 10px !important;
    background: none;
    color: #ffb400;

    ion-icon {
      font-size: 30px;
    }
  }
}
```

Based on ionic-rating for Ionic 1: https://github.com/fraserxu/ionic-rating

[preview-image]: https://github.com/andrucz/ionic2-rating/blob/master/preview.gif
[npm-url]: https://www.npmjs.com/package/ionic2-rating
[npm-image]: https://img.shields.io/npm/v/ionic2-rating.svg
[nodei-image]: https://nodei.co/npm/ionic2-rating.png?downloads=true&downloadRank=true&stars=true
[nodei-url]: https://www.npmjs.com/package/ionic2-rating
[downloads-image]: https://img.shields.io/npm/dm/ionic2-rating.svg
[downloads-url]: http://badge.fury.io/js/ionic2-rating
[travis-image]: https://travis-ci.org/andrucz/ionic2-rating.svg?branch=master
[travis-url]: https://travis-ci.org/andrucz/ionic2-rating
