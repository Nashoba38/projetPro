import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalerieAllComponent } from './galerie-all.component';

describe('GalerieAllComponent', () => {
  let component: GalerieAllComponent;
  let fixture: ComponentFixture<GalerieAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalerieAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalerieAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
