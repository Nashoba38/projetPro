import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEspecesComponent } from './liste-especes.component';

describe('ListeEspecesComponent', () => {
  let component: ListeEspecesComponent;
  let fixture: ComponentFixture<ListeEspecesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeEspecesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeEspecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
