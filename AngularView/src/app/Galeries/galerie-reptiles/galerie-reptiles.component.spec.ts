import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalerieReptilesComponent } from './galerie-reptiles.component';

describe('GalerieReptilesComponent', () => {
  let component: GalerieReptilesComponent;
  let fixture: ComponentFixture<GalerieReptilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalerieReptilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalerieReptilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
