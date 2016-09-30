ionic2-rating
=============

An Angular2 component to visualize a star rating bar, built for Ionic 2.

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
ul.rating li {
  display: inline;
  border: 0px;
  background: none;
  color: #ffb400;
}
```

Based on ionic-rating for Ionic 1: https://github.com/fraserxu/ionic-rating
