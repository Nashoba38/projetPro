import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvertebresComponent } from './invertebres.component';

describe('InvertebresComponent', () => {
  let component: InvertebresComponent;
  let fixture: ComponentFixture<InvertebresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvertebresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvertebresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
