import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';
import { } from 'jasmine';

import { Ionic2Rating } from './ionic2-rating';

describe('Ionic2Rating', () => {
  let fixture: ComponentFixture<Ionic2Rating>;
  let component: Ionic2Rating;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Ionic2Rating],
      imports: [
        IonicModule.forRoot(Ionic2Rating)
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ionic2Rating);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component instanceof Ionic2Rating).toBe(true);
  });

});
