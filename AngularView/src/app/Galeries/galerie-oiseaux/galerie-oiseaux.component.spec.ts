import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalerieOiseauxComponent } from './galerie-oiseaux.component';

describe('GalerieOiseauxComponent', () => {
  let component: GalerieOiseauxComponent;
  let fixture: ComponentFixture<GalerieOiseauxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalerieOiseauxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalerieOiseauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
