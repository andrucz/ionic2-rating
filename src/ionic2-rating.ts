import { Component, forwardRef, Input, Provider } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const noop = () => {};

export const RATING_CONTROL_VALUE_ACCESSOR: Provider = {
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

  private _max: number = 5;
  private _readOnly: boolean = false;
  private _emptyStarIconName: string = 'star-outline';
  private _halfStarIconName: string = 'star-half';
  private _starIconName: string = 'star';
  private _nullable: boolean = false;

  @Input()
  get max() {
    return this._max;
  }

  set max(val: string | number) {
    const newValue = this.getNumberPropertyValue(val);
    if (newValue !== this._max) {
      this._max = newValue;
      this.createStarIndexes();
    }
  }

  @Input()
  get readOnly() {
    return this._readOnly;
  }

  set readOnly(val: any) {
    this._readOnly = this.isTrueProperty(val);
  }

  @Input()
  get emptyStarIconName() {
    return this._emptyStarIconName;
  }

  set emptyStarIconName(val: string) {
    this._emptyStarIconName = val;
  }

  @Input()
  get halfStarIconName() {
    return this._halfStarIconName;
  }

  set halfStarIconName(val: string) {
    this._halfStarIconName = val;
  }

  @Input()
  get starIconName() {
    return this._starIconName;
  }

  set starIconName(val: string) {
    this._starIconName = val;
  }

  @Input()
  get nullable() {
    return this._nullable;
  }

  set nullable(val: any) {
    this._nullable = this.isTrueProperty(val);
  }

  private innerValue: number;
  starIndexes: Array<number>;

  onChangeCallback: (_: any) => void = noop;

  ngOnInit() {
    // ngFor works with arrays only
    this.createStarIndexes();
  }

  createStarIndexes() {
    this.starIndexes = Array(this.max).fill(1).map((x, i) => i);
  }

  getStarIconName(starIndex: number) {
    if (this.value === undefined) {
      return this.emptyStarIconName;
    }

    if (this.value > starIndex) {
      if (this.value < starIndex + 1) {
        return this.halfStarIconName;
      }

      return this.starIconName;
    }
    return this.emptyStarIconName;
  }

  get value(): number {
    return this.innerValue;
  }

  set value(value: number) {
    if (value !== this.innerValue) {
      this.innerValue = value;
      this.onChangeCallback(value);
    }
  }

  writeValue(value: number) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched() {}

  onKeyDown(event: any) {
    if (/(37|38|39|40)/.test(event.which)) {
      event.preventDefault();
      event.stopPropagation();

      const newValue = this.value + ((event.which == 38 || event.which == 39) ? 1 : -1);
      return this.rate(newValue);
    }
  }

  rate(value: number) {
    if (this.readOnly || value < 0 || value > this.max) {
      return;
    }

    if (value === this.value && this.nullable) {
      value = null;
    }

    this.value = value;
  }

  private isTrueProperty(val: any): boolean {
    if (typeof val === 'string') {
      val = val.toLowerCase().trim();
      return (val === 'true' || val === 'on');
    }
    return !!val;
  }

  private getNumberPropertyValue(val: string | number): number {
    if (typeof val === 'string') {
      return parseInt(val.trim());
    }
    return val;
  }
}
