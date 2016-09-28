ionic2-rating
=============

An Angular2 component to visualize a star rating bar, built for Ionic 2.

#### How to use:

Install with npm:

```
$ npm install ionic2-rating
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

```HTML
<rating [(ngModel)]="rate"></rating>
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
