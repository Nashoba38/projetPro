import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalerieInvertebresComponent } from './galerie-invertebres.component';

describe('GalerieInvertebresComponent', () => {
  let component: GalerieInvertebresComponent;
  let fixture: ComponentFixture<GalerieInvertebresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalerieInvertebresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalerieInvertebresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
