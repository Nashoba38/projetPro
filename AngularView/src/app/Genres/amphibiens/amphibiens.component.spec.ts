import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmphibiensComponent } from './amphibiens.component';

describe('AmphibiensComponent', () => {
  let component: AmphibiensComponent;
  let fixture: ComponentFixture<AmphibiensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmphibiensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmphibiensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
