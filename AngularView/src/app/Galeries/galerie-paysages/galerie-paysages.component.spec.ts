import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriePaysagesComponent } from './galerie-paysages.component';

describe('GaleriePaysagesComponent', () => {
  let component: GaleriePaysagesComponent;
  let fixture: ComponentFixture<GaleriePaysagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaleriePaysagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleriePaysagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
