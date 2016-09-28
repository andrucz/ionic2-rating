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
    <ul class="rating" (keydown)="onKeydown($event)">
      <li *ngFor="let r of range; let i = index; trackBy:i" (click)="rate(i + 1)">
        <ion-icon [name]="value === undefined ? (r === 1 ? 'star' : (r === 2 ? 'star-half' : 'star-outline')) : (value > i ? (value < i+1 ? 'star-half' : 'star') : 'star-outline')">
        </ion-icon>
      </li>
    </ul>
  `,
  providers: [RATING_CONTROL_VALUE_ACCESSOR]
})
export class Ionic2Rating implements ControlValueAccessor {

  @Input() max = 5;
  @Input() readOnly = false;

  private range: Array<Number>;
  private innerValue: any;
  private onChangeCallback: (_: any) => void = noop;

  ngOnInit() {
    let states: Array<number> = [];

    for (let i = 0; i < this.max; i++) {
      if (this.innerValue > i && this.innerValue < i + 1) {
        states[i] = 2;

      } else if (this.innerValue > i) {
        states[i] = 1;

      } else {
        states[i] = 0;
      }
    }

    this.range = states;
  }

  get value(): any {
    return this.innerValue;
  }

  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
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

  rate(amount: number) {
    if (!this.readOnly && amount >= 0 && amount <= this.range.length) {
      this.value = amount;
    }
  }

}