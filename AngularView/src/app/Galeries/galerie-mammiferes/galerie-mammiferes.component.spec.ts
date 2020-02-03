import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalerieMammiferesComponent } from './galerie-mammiferes.component';

describe('GalerieMammiferesComponent', () => {
  let component: GalerieMammiferesComponent;
  let fixture: ComponentFixture<GalerieMammiferesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalerieMammiferesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalerieMammiferesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
