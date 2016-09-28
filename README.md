ionic2-rating
=============

An Angular2 component to visualize a star rating bar, built for Ionic 2.

#### How to use:

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

Based on ionic-rating for Ionic 1: https://github.com/fraserxu/ionic-rating
