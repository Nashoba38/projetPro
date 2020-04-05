import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MammiferesComponent } from './mammiferes.component';

describe('MammiferesComponent', () => {
  let component: MammiferesComponent;
  let fixture: ComponentFixture<MammiferesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MammiferesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MammiferesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
