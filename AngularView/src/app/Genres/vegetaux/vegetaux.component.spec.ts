import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetauxComponent } from './vegetaux.component';

describe('VegetauxComponent', () => {
  let component: VegetauxComponent;
  let fixture: ComponentFixture<VegetauxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegetauxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegetauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
