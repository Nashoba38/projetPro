import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OiseauxComponent } from './oiseaux.component';

describe('OiseauxComponent', () => {
  let component: OiseauxComponent;
  let fixture: ComponentFixture<OiseauxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OiseauxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OiseauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
