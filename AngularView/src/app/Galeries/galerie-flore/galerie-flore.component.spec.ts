import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalerieFloreComponent } from './galerie-flore.component';

describe('GalerieFloreComponent', () => {
  let component: GalerieFloreComponent;
  let fixture: ComponentFixture<GalerieFloreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalerieFloreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalerieFloreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
