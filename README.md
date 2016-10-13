ionic2-rating
=============

An Angular2 component to visualize a star rating bar, built for Ionic 2.

![Preview][preview-image]

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][downloads-url]

[![NPM][nodei-image]][nodei-url]

#### How to install:

##### For Angular 2 RC5 and later (Ionic 2 RC.0 and later):

```
$ npm install --save ionic2-rating
```

```Typescript
import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
  imports: [
    Ionic2RatingModule
  ]
})
export class AppModule {}
```

##### For Angular 2 RC4 (Ionic 2 beta version):

```
$ npm install --save ionic2-rating@0.0.6
```

In your component:

```TypeScript
import { Ionic2Rating } from 'ionic2-rating';

@Component({
  templateUrl: '...',
  directives: [Ionic2Rating]
})
export class MyComponent {
  private rate = 2.5;
}
```

#### How to use:

```HTML
<rating [(ngModel)]="rate"></rating>
```

If you want to make it read-only, use "readOnly" property:

```HTML
<rating [(ngModel)]="rate" readOnly="true"></rating>
```

If you want to change the number of stars, use "max" property (default is 5):

```HTML
<rating [(ngModel)]="rate" max="10"></rating>
```

You may also need to customize component styles:

```CSS
ul {
  padding: 0px;

  &.rating li {
    padding: 5px 10px;
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
