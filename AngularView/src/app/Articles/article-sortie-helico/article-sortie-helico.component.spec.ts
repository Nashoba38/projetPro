import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSortieHelicoComponent } from './article-sortie-helico.component';

describe('ArticleSortieHelicoComponent', () => {
  let component: ArticleSortieHelicoComponent;
  let fixture: ComponentFixture<ArticleSortieHelicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleSortieHelicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleSortieHelicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
