import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const noop = () => {
};

export const RATING_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => Ionic2Rating),
  multi: true
};

@Component({
  selector: 'rating',
  styles: [`
    ul.rating li {
      display: inline;
      border: 0px;
      background: none;
      padding: 5px 10px;
    }
    ul.rating li i {
      font-size: 30px;
    }
  `],
  template: `
    <ul class="rating" (keydown)="onKeyDown($event)">
      <li *ngFor="let starIndex of starIndexes" tappable (click)="rate(starIndex + 1)">
        <ion-icon [name]="getStarIconName(starIndex)">
        </ion-icon>
      </li>
    </ul>`,
  providers: [RATING_CONTROL_VALUE_ACCESSOR]
})
export class Ionic2Rating implements ControlValueAccessor {

  @Input() 
  max = 5;

  @Input() 
  readOnly = false;

  @Input()
  emptyStarIconName = 'star-outline';

  @Input()
  halfStarIconName = 'star-half';

  @Input()
  starIconName = 'star';

  private innerValue: any;

  starIndexes: Array<number>;

  onChangeCallback: (_: any) => void = noop;

  ngOnInit() {
    this.starIndexes = Array(this.max).fill(1).map((x, i) => i);
  }

  getStarIconName(starIndex: number) {
    if (this.value === undefined) {
      return this.emptyStarIconName;
    }

    if (this.value > starIndex) {

      if (this.value < starIndex + 1) {
        return this.halfStarIconName;

      } else {
        return this.starIconName;
      }

    } else {
      return this.emptyStarIconName;
    }
  }

  get value(): any {
    return this.innerValue;
  }

  set value(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
      this.onChangeCallback(value);
    }
  }

  writeValue(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
  }

  onKeyDown(event: any) {
    if (/(37|38|39|40)/.test(event.which)) {
      event.preventDefault();
      event.stopPropagation();

      let newValue = this.value + ((event.which == 38 || event.which == 39) ? 1 : -1);
      return this.rate(newValue);
    }
  }

  rate(value: number) {
    if (!this.readOnly && value >= 0 && value <= this.max) {
      this.value = value;
    }
  }
}