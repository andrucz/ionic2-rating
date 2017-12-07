import { async, TestBed, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { } from 'jasmine';

import { Ionic2Rating } from './ionic2-rating';

describe('Ionic2Rating', () => {
  let component: Ionic2Rating;
  let fixture: ComponentFixture<Ionic2Rating>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Ionic2Rating],
      imports: [
        IonicModule.forRoot(Ionic2Rating)
      ],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ionic2Rating);
    component = fixture.componentInstance;

    de = fixture.debugElement.query(By.css('ul'));
    el = de.nativeElement;
  });

  it('should be created', () => {
    expect(component instanceof Ionic2Rating).toBe(true);
  });

  it('should show 5 stars by default', () => {
    expect(el.childElementCount).toBe(5);
  });

  it('should reflect max value', () => {
    component.max = 10;
    fixture.detectChanges();
    expect(el.childElementCount).toBe(10);
  });

});
