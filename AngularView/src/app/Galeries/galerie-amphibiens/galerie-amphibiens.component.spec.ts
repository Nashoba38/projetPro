import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalerieAmphibiensComponent } from './galerie-amphibiens.component';

describe('GalerieAmphibiensComponent', () => {
  let component: GalerieAmphibiensComponent;
  let fixture: ComponentFixture<GalerieAmphibiensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalerieAmphibiensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalerieAmphibiensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
